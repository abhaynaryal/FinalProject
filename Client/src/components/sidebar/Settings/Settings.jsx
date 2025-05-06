import React, { useState } from 'react';

const Settings = () => {
  const [name, setName] = useState('Abhay Naryal');
  const [email, setEmail] = useState('abhay@example.com');
  const [profilePic, setProfilePic] = useState(null);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleProfilePicChange = (e) => {
    setProfilePic(URL.createObjectURL(e.target.files[0]));
  };

  const handleSaveProfile = () => {
    // Call your backend API to update profile info
    alert('Profile updated!');
  };

  const handleChangePassword = () => {
    // Call your backend API to change password
    alert('Password changed!');
  };

  const handleLogout = () => {
    // Clear auth token and redirect
    alert('Logged out');
  };

  return (
    <div className="max-w-2xl mx-auto p-4 space-y-6">
      {/* Profile Info */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow">
        <h2 className="text-xl font-bold mb-4">Profile Info</h2>
        <div className="space-y-4">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            className="w-full p-2 border rounded"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full p-2 border rounded"
          />
          <input type="file" onChange={handleProfilePicChange} />
          {profilePic && <img src={profilePic} alt="Profile" className="w-20 h-20 rounded-full" />}
          <button onClick={handleSaveProfile} className="px-4 py-2 bg-blue-600 text-white rounded">
            Save Profile
          </button>
        </div>
      </div>

      {/* Change Password */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow">
        <h2 className="text-xl font-bold mb-4">Change Password</h2>
        <div className="space-y-4">
          <input
            type="password"
            placeholder="Current Password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            className="w-full p-2 border rounded"
          />
          <input
            type="password"
            placeholder="New Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="w-full p-2 border rounded"
          />
          <button onClick={handleChangePassword} className="px-4 py-2 bg-green-600 text-white rounded">
            Update Password
          </button>
        </div>
      </div>

      {/* Connected Accounts */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow">
        <h2 className="text-xl font-bold mb-4">Connected Accounts</h2>
        <button className="w-full p-2 mb-2 border rounded hover:bg-gray-100">
          Connect with Google
        </button>
        <button className="w-full p-2 border rounded hover:bg-gray-100">
          Connect with GitHub
        </button>
      </div>

      {/* Logout */}
      <div className="text-center">
        <button onClick={handleLogout} className="px-6 py-2 bg-red-600 text-white rounded">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Settings;
