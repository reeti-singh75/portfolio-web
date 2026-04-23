import React, { useEffect, useState } from 'react';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { signOut } from 'firebase/auth';
import { db, auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import './admin.css';

const Dashboard = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState(null); // message selected for modal
  const [modalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();

  // Fetch messages from Firebase
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        // Yahan dhyan dein: Collection ka naam 'portfolio_messages' hona chahiye
        const querySnapshot = await getDocs(collection(db, 'portfolio_messages'));
        const msgs = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));

        // Messages ko time ke hisaab se sort karna (Latest pehle)
        msgs.sort((a, b) => {
          const ta = a.sentAt && a.sentAt.toMillis ? a.sentAt.toMillis() : 0;
          const tb = b.sentAt && b.sentAt.toMillis ? b.sentAt.toMillis() : 0;
          return tb - ta;
        });
        setMessages(msgs);
      } catch (error) {
        console.error("Error fetching messages: ", error);
        alert("Messages fetch karne mein error aayi. Console check karein.");
      } finally {
        setLoading(false);
      }
    };

    fetchMessages();
  }, []);

  // Delete message function
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this message?");
    if (confirmDelete) {
      try {
        await deleteDoc(doc(db, 'portfolio_messages', id));
        setMessages(messages.filter(msg => msg.id !== id));
      } catch (error) {
        console.error("Error deleting document: ", error);
      }
    }
  };

  // Logout function
  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/login');
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

  return (
    <div className="admin-root">
      <div className="admin-container">

        {/* Header */}
        <div className="admin-topbar">
          <div>
            <h1 className="admin-title" style={{ margin: 0 }}>
              Admin <span className="admin-highlight">Dashboard</span>
            </h1>
            <div className="admin-sub">Manage contact messages</div>
          </div>
          <div>
            <button onClick={handleLogout} className="admin-btn-outline">Logout</button>
          </div>
        </div>

        {/* Loading / Empty */}
        {loading ? (
          <div className="admin-loading">
            <div className="admin-spinner"></div>
            <div className="loading-text">Loading messages…</div>
          </div>
        ) : messages.length === 0 ? (
          <div className="admin-empty">
            <div className="admin-empty-illustration">✉️</div>
            <div className="admin-empty-text">No messages yet.</div>
          </div>
        ) : (
          <div className="admin-list">
            <div className="list-header">
              <div className="col col-name">Name</div>
              <div className="col col-email">Email</div>
              <div className="col col-phone">Phone</div>
              <div className="col col-time">Received</div>
              <div className="col col-actions">Actions</div>
            </div>

            {messages.map((msg) => (
              <div key={msg.id} className="list-row admin-card">
                <div className="row-main">
                  <div className="col col-name">{msg.name || msg.Name || '—'}</div>
                  <div className="col col-email">{msg.email || msg.Email || '—'}</div>
                  <div className="col col-phone">{msg.phone || msg['Phone Number'] || '—'}</div>
                  <div className="col col-time">{(msg.sentAt && msg.sentAt.toDate) ? msg.sentAt.toDate().toLocaleString() : msg.timestampLabel || '—'}</div>
                </div>
                <div className="row-actions">
                  <button className="admin-btn" onClick={() => { setSelected(msg); setModalOpen(true); }}>View Message</button>
                  <button className="admin-btn-outline" onClick={() => handleDelete(msg.id)}>Delete</button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Modal */}
        {modalOpen && selected && (
          <div className="admin-modal-overlay" role="dialog" aria-modal="true" onClick={(e) => { if (e.target.classList.contains('admin-modal-overlay')) setModalOpen(false); }}>
            <div className="admin-modal admin-card">
              <div className="admin-modal-header">
                <h2>Message from {selected.name || selected.Name || '—'}</h2>
                <div className="modal-meta">{(selected.sentAt && selected.sentAt.toDate) ? selected.sentAt.toDate().toLocaleString() : selected.timestampLabel || '—'}</div>
              </div>
              <div className="admin-modal-body">
                <div><strong>Email:</strong> {selected.email || selected.Email || '—'}</div>
                <div><strong>Phone:</strong> {selected.phone || selected['Phone Number'] || '—'}</div>
                <hr />
                <div className="modal-message">{selected.message || selected.Message || '—'}</div>
              </div>
              <div className="admin-modal-footer">
                <button className="admin-btn-outline" onClick={() => setModalOpen(false)}>Close</button>
                <button className="admin-btn-outline" onClick={() => { handleDelete(selected.id); setModalOpen(false); }}>Delete</button>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default Dashboard;