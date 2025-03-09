// src/components/account/UserProfile.jsx
import React, { useState } from "react";
import { User, Mail, Phone, MapPin, Calendar, Camera } from "lucide-react";

const UserProfile = ({ user, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    firstName: user?.firstName || "",
    lastName: user?.lastName || "",
    email: user?.email || "",
    phone: user?.phone || "",
    address: user?.address || "",
    birthDate: user?.birthDate || "",
    bio: user?.bio || "",
  });

  if (!user) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(formData);
    setIsEditing(false);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      {/* Header */}
      <div className="bg-gray-50 p-4 border-b">
        <h2 className="text-lg font-medium text-gray-800">Profil personnel</h2>
        <p className="text-sm text-gray-500">
          Gérez vos informations personnelles
        </p>
      </div>

      {/* Avatar Section */}
      <div className="flex justify-center py-6 border-b">
        <div className="relative">
          {user.avatar ? (
            <img
              src={user.avatar}
              alt={`${user.firstName} ${user.lastName}`}
              className="w-24 h-24 rounded-full object-cover"
            />
          ) : (
            <div className="w-24 h-24 rounded-full bg-blue-100 flex items-center justify-center text-xl font-bold text-blue-600">
              {user.firstName?.charAt(0) || ""}
              {user.lastName?.charAt(0) || ""}
            </div>
          )}
          <button
            className="absolute bottom-0 right-0 bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700"
            aria-label="Modifier la photo de profil"
          >
            <Camera className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Profile Content */}
      <div className="p-6">
        {isEditing ? (
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Prénom
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Nom
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Téléphone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label
                  htmlFor="address"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Adresse
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label
                  htmlFor="birthDate"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Date de naissance
                </label>
                <input
                  type="date"
                  id="birthDate"
                  name="birthDate"
                  value={formData.birthDate}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
            </div>
            <div className="mb-6">
              <label
                htmlFor="bio"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Bio
              </label>
              <textarea
                id="bio"
                name="bio"
                value={formData.bio}
                onChange={handleChange}
                rows="3"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="flex justify-end space-x-3">
              <button
                type="button"
                className="px-4 py-2 border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-50"
                onClick={() => setIsEditing(false)}
              >
                Annuler
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700"
              >
                Enregistrer
              </button>
            </div>
          </form>
        ) : (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 mb-6">
              <div className="flex items-center">
                <User className="h-5 w-5 text-gray-400 mr-2" />
                <div>
                  <p className="text-sm text-gray-500">Nom complet</p>
                  <p className="font-medium">
                    {user.firstName} {user.lastName}
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-gray-400 mr-2" />
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="font-medium">{user.email}</p>
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-gray-400 mr-2" />
                <div>
                  <p className="text-sm text-gray-500">Téléphone</p>
                  <p className="font-medium">{user.phone || "-"}</p>
                </div>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-gray-400 mr-2" />
                <div>
                  <p className="text-sm text-gray-500">Adresse</p>
                  <p className="font-medium">{user.address || "-"}</p>
                </div>
              </div>
              <div className="flex items-center">
                <Calendar className="h-5 w-5 text-gray-400 mr-2" />
                <div>
                  <p className="text-sm text-gray-500">Date de naissance</p>
                  <p className="font-medium">{user.birthDate || "-"}</p>
                </div>
              </div>
            </div>

            {user.bio && (
              <div className="mb-6">
                <p className="text-sm text-gray-500 mb-1">Bio</p>
                <p className="text-gray-700">{user.bio}</p>
              </div>
            )}

            <div className="flex justify-end">
              <button
                onClick={() => setIsEditing(true)}
                className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700"
              >
                Modifier le profil
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
