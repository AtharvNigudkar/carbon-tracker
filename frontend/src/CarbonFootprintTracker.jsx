import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { useState, useEffect } from 'react';
import { Leaf, Activity, FileText, History, PlusCircle, TrendingDown, Zap, Car, Trash2, BarChart3, Award, User, LogOut, Menu, X } from 'lucide-react';
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend
} from "chart.js";

import Plot from "react-plotly.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

// Navigation Component
function Navbar({ currentPage, setCurrentPage, isLoggedIn, setIsLoggedIn }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentPage('home');
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => setCurrentPage('home')}>
            <div className="bg-green-500 p-2 rounded-lg">
              <Leaf className="text-white" size={24} />
            </div>
            <span className="text-xl font-bold text-gray-800">EcoTracker</span>
          </div>

          {/* Desktop Menu */}
<div className="hidden md:flex items-center gap-6">
  {!isLoggedIn ? (
    <>
      <button onClick={() => setCurrentPage('home')} className="text-gray-700 hover:text-green-600 font-medium transition">Home</button>
      <button onClick={() => setCurrentPage('login')} className="text-gray-700 hover:text-green-600 font-medium transition">Login</button>
      <button onClick={() => setCurrentPage('register')} className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition">Register</button>
    </>
  ) : (
    <>
      <button onClick={() => setCurrentPage('dashboard')} className="text-gray-700 hover:text-green-600 font-medium transition">Dashboard</button>
      <button onClick={() => setCurrentPage('add-activity')} className="text-gray-700 hover:text-green-600 font-medium transition">Add Activity</button>
      <button onClick={() => setCurrentPage('report')} className="text-gray-700 hover:text-green-600 font-medium transition">Reports</button>
      <button onClick={() => setCurrentPage('history')} className="text-gray-700 hover:text-green-600 font-medium transition">History</button>
      <button onClick={() => setCurrentPage('learn')} className="text-gray-700 hover:text-green-600 font-medium transition">
      Learn
     </button>

      {/* NEW PROFILE BUTTON */}
      <button onClick={() => setCurrentPage('profile')} className="text-gray-700 hover:text-green-600 font-medium transition">
        Profile
      </button>

      <button onClick={handleLogout} className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition">
        <LogOut size={18} />
        Logout
      </button>
    </>
  )}
</div>


          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-2">
            {!isLoggedIn ? (
              <>
                <button onClick={() => { setCurrentPage('home'); setMobileMenuOpen(false); }} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100">Home</button>
                <button onClick={() => { setCurrentPage('login'); setMobileMenuOpen(false); }} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100">Login</button>
                <button onClick={() => { setCurrentPage('register'); setMobileMenuOpen(false); }} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100">Register</button>
              </>
            ) : (
              <>
                <button onClick={() => { setCurrentPage('dashboard'); setMobileMenuOpen(false); }} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100">Dashboard</button>
                <button onClick={() => { setCurrentPage('add-activity'); setMobileMenuOpen(false); }} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100">Add Activity</button>
                <button onClick={() => { setCurrentPage('report'); setMobileMenuOpen(false); }} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100">Reports</button>
                <button onClick={() => { setCurrentPage('history'); setMobileMenuOpen(false); }} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100">History</button>
                <button
               onClick={() => { setCurrentPage('learn'); setMobileMenuOpen(false); }}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
              Learn
             </button>
                <button
          onClick={() => { setCurrentPage('profile'); setMobileMenuOpen(false); }}
          className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
        >
          Profile
        </button>
                <button onClick={() => { handleLogout(); setMobileMenuOpen(false); }} className="block w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100">Logout</button>
              </>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}

// Footer Component
function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Leaf className="text-green-400" size={24} />
              <span className="text-xl font-bold">EcoTracker</span>
            </div>
            <p className="text-gray-400">Track your carbon footprint and make a positive impact on the environment.</p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li>About Us</li>
              <li>How It Works</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <p className="text-gray-400">Email: info@ecotracker.com</p>
            <p className="text-gray-400">Phone: +91 12345 67890</p>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
          <p>&copy; 2025 EcoTracker. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

// Home Page
function HomePage({ setCurrentPage }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Track Your <span className="text-green-600">Carbon Footprint</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Make a positive impact on the environment by monitoring and reducing your carbon emissions. Join thousands of users making a difference.
          </p>
          <div className="flex gap-4 justify-center">
            <button onClick={() => setCurrentPage('register')} className="bg-green-500 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-green-600 transition">
              Get Started
            </button>
            <button onClick={() => setCurrentPage('login')} className="bg-white text-green-600 px-8 py-3 rounded-lg text-lg font-semibold border-2 border-green-500 hover:bg-green-50 transition">
              Login
            </button>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition">
            <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
              <Activity className="text-blue-600" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Track Activities</h3>
            <p className="text-gray-600">Monitor your daily activities including travel, electricity usage, and waste generation.</p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition">
            <div className="bg-purple-100 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
              <BarChart3 className="text-purple-600" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Visual Reports</h3>
            <p className="text-gray-600">Get detailed insights with interactive charts and comprehensive emission reports.</p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition">
            <div className="bg-green-100 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
              <TrendingDown className="text-green-600" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Get Suggestions</h3>
            <p className="text-gray-600">Receive personalized recommendations to reduce your carbon footprint effectively.</p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-24 bg-white rounded-xl shadow-lg p-12">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Why Carbon Footprint Matters</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">5.5 tons</div>
              <p className="text-gray-600">Average annual CO2 per person in India</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">2°C</div>
              <p className="text-gray-600">Global temperature rise target limit</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">30%</div>
              <p className="text-gray-600">Reduction needed by 2030</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

// Login Page
function LoginPage({ setCurrentPage, setIsLoggedIn }) {
  const [formData, setFormData] = useState({ email: '', password: '' });

 const handleSubmit = (e) => {
  e.preventDefault();

  fetch("http://127.0.0.1:5000/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: formData.email,
      password: formData.password
    })
  })
    .then(res => res.json())
    .then(data => {
      if (data.user_id) {
        localStorage.setItem("user_id", data.user_id);
        localStorage.setItem("user_name", data.name);
        toast.success("Login successful!");

        setIsLoggedIn(true);
        setCurrentPage("dashboard");
      } else {
        toast.error("Invalid email or password");
      }
    })
    .catch(err => {
      console.error(err);
      toast.error("Login failed. Backend error.");
    });
};

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-xl p-8">
        <div className="text-center mb-8">
          <div className="bg-green-500 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
            <Leaf className="text-white" size={32} />
          </div>
          <h2 className="text-3xl font-bold text-gray-900">Welcome Back</h2>
          <p className="text-gray-600 mt-2">Login to your EcoTracker account</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              placeholder="your.email@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
            <input
              type="password"
              required
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              placeholder="Enter your password"
            />
          </div>

          <button type="submit" className="w-full bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600 transition">
            Login
          </button>
        </form>

        <p className="text-center text-gray-600 mt-6">
          Don't have an account?{' '}
          <button onClick={() => setCurrentPage('register')} className="text-green-600 font-semibold hover:underline">
            Register here
          </button>
        </p>
      </div>
    </div>
  );
}

// Register Page
function RegisterPage({ setCurrentPage }) {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://127.0.0.1:5000/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        password: formData.password
      })
    })
      .then(res => res.json())
      .then(data => {
        toast.success("Account created successfully!");     // shows "User registered successfully"
        setCurrentPage("login");  // go to login page after success
      })
      .catch(err => {
        console.error(err);
        alert("Registration failed. Check backend is running.");
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-xl p-8">
        <div className="text-center mb-8">
          <div className="bg-green-500 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
            <User className="text-white" size={32} />
          </div>
          <h2 className="text-3xl font-bold text-gray-900">Create Account</h2>
          <p className="text-gray-600 mt-2">Join EcoTracker and start tracking your footprint</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg"
              placeholder="John Doe"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg"
              placeholder="your.email@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
            <input
              type="password"
              required
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg"
              placeholder="Create a strong password"
            />
          </div>

          <button type="submit" className="w-full bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600 transition">
            Register
          </button>
        </form>

        <p className="text-center text-gray-600 mt-6">
          Already have an account?{" "}
          <button onClick={() => setCurrentPage("login")} className="text-green-600 font-semibold hover:underline">
            Login here
          </button>
        </p>
      </div>
    </div>
  );
}


// Dashboard Page
function DashboardPage({ setCurrentPage, activities }) {
  const totalEmission = activities.reduce((sum, act) => sum + act.emission, 0);
 const lastActivity = activities[activities.length - 1];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900">
  Welcome back, {localStorage.getItem("user_name") || "User"}!
</h1>
          <p className="text-gray-600 mt-2">Here's your carbon footprint overview</p>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Total Carbon Emission</p>
                <p className="text-4xl font-bold text-green-600 mt-2">{totalEmission.toFixed(2)} kg</p>
                <p className="text-gray-500 text-sm mt-1">CO2 equivalent</p>
              </div>
              <div className="bg-green-100 p-4 rounded-lg">
                <Leaf className="text-green-600" size={40} />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Last Activity</p>
                <p className="text-2xl font-bold text-gray-900 mt-2">
                  {lastActivity ? lastActivity.type : 'No activities yet'}
                </p>
                <p className="text-gray-500 text-sm mt-1">
                  {lastActivity ? `${lastActivity.emission.toFixed(2)} kg CO2` : 'Add your first activity'}
                </p>
              </div>
              <div className="bg-blue-100 p-4 rounded-lg">
                <Activity className="text-blue-600" size={40} />
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <button
            onClick={() => setCurrentPage('add-activity')}
            className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition text-left"
          >
            <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <PlusCircle className="text-purple-600" size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Add Activity</h3>
            <p className="text-gray-600">Track new carbon emission activity</p>
          </button>

          <button
            onClick={() => setCurrentPage('report')}
            className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition text-left"
          >
            <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <FileText className="text-blue-600" size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">View Reports</h3>
            <p className="text-gray-600">Analyze your emission patterns</p>
          </button>

          <button
          onClick={() => {
          setCurrentPage('report');
          setTimeout(() => {
      document.getElementById("suggestions-section")?.scrollIntoView({ behavior: "smooth" });
    }, 200);
  }}
            className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition text-left"
          >
            <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Award className="text-green-600" size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Suggestions</h3>
            <p className="text-gray-600">Get tips to reduce emissions</p>
          </button>

          <button
            onClick={() => setCurrentPage('history')}
            className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition text-left"
          >
            <div className="bg-orange-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <History className="text-orange-600" size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">History</h3>
            <p className="text-gray-600">View all past activities</p>
          </button>
        </div>
      </div>
    </div>
  );
}

// Add Activity Page
function AddActivityPage({ setCurrentPage, activities, setActivities }) {
  const [formData, setFormData] = useState({
    type: 'travel',
    value: '',
    date: new Date().toISOString().split('T')[0]
  });

  const emissionFactors = {
    travel: 0.21,
    electricity: 0.82,
    waste: 0.45
  };

  const handleSubmit = (e) => {
  e.preventDefault();

  fetch("http://127.0.0.1:5000/activity", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      user_id: localStorage.getItem("user_id"),
      type: formData.type,
      value: formData.value,
      date: formData.date
    })
  })
    .then(res => res.json())
    .then(data => {
      toast.success(`Emission saved: ${data.emission.toFixed(2)} kg CO2`);
      setFormData({ type: 'travel', value: '', date: new Date().toISOString().split('T')[0] });
      setCurrentPage("dashboard");
    })
    .catch(err => {
      console.error(err);
      alert("Failed to add activity. Check backend.");
    });
};


  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-8">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-xl p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Add New Activity</h1>
            <p className="text-gray-600 mt-2">Track your carbon emission activity</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Activity Type</label>
              <select
                value={formData.type}
                onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                <option value="travel">Travel (km)</option>
                <option value="electricity">Electricity (kWh)</option>
                <option value="waste">Waste (kg)</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Value</label>
              <input
                type="number"
                step="0.01"
                required
                value={formData.value}
                onChange={(e) => setFormData({ ...formData, value: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="Enter value"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
              <input
                type="date"
                required
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>

            <div className="flex gap-4">
              <button
                type="submit"
                className="flex-1 bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600 transition"
              >
                Submit Activity
              </button>
              <button
                type="button"
                onClick={() => setCurrentPage('dashboard')}
                className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-300 transition"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

// Report Page
function ReportPage({ activities }) {
  const totalEmission = activities.reduce((sum, act) => sum + act.emission, 0);

  

  const travelEmission = activities
    .filter(a => a.type.toLowerCase() === "travel")
    .reduce((s, a) => s + a.emission, 0);

  const electricityEmission = activities
    .filter(a => a.type.toLowerCase() === "electricity")
    .reduce((s, a) => s + a.emission, 0);

  const wasteEmission = activities
    .filter(a => a.type.toLowerCase() === "waste")
    .reduce((s, a) => s + a.emission, 0);

    // Highest emission source
const emissions = [
  { type: "Travel", value: travelEmission },
  { type: "Electricity", value: electricityEmission },
  { type: "Waste", value: wasteEmission }
];

const highestEmission = emissions.sort((a, b) => b.value - a.value)[0];

    const emissionCategories = [
  {
    type: "travel",
    value: travelEmission,
    icon: Car,
    title: "Reduce Travel Emissions",
    description:
      "Use public transport, carpool with colleagues, or walk/cycle for short trips to reduce vehicle emissions."
  },
  {
    type: "electricity",
    value: electricityEmission,
    icon: Zap,
    title: "Improve Energy Efficiency",
    description:
      "Switch to LED lighting, turn off appliances when not in use, and unplug chargers to save electricity."
  },
  {
    type: "waste",
    value: wasteEmission,
    icon: Trash2,
    title: "Reduce Household Waste",
    description:
      "Separate recyclable waste, compost organic waste, and reduce single-use plastic usage."
  }
];

// sort by emission value
const suggestions = emissionCategories
  .sort((a, b) => b.value - a.value)
  .slice(0, 3);

// assign impact levels
if (suggestions[0]) suggestions[0].impact = "High Impact";
if (suggestions[1]) suggestions[1].impact = "Medium Impact";
if (suggestions[2]) suggestions[2].impact = "Low Impact";


    

// Aggregate emissions per date
// Group emissions by date
const emissionsByDate = {};

activities.forEach(activity => {
  const date = activity.date;

  if (!emissionsByDate[date]) {
    emissionsByDate[date] = 0;
  }

  emissionsByDate[date] += activity.emission;
});

// Sort dates
const sortedDates = Object.keys(emissionsByDate).sort();

// Get emission totals
const emissionsOverTime = sortedDates.map(date => emissionsByDate[date]);

// Weekly comparison
const thisWeek = emissionsOverTime.slice(-7).reduce((a, b) => a + b, 0);
const lastWeek = emissionsOverTime.slice(-14, -7).reduce((a, b) => a + b, 0);

let change = 0;

if (lastWeek > 5) {
  change = ((thisWeek - lastWeek) / lastWeek) * 100;
}

  // Reduction goal
const targetReduction = totalEmission * 0.1;

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900">Emission Report</h1>
          <p className="text-gray-600 mt-2">Your carbon footprint analysis and recommendations</p>
        </div>

        {/* Total Emission Card */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Total Carbon Emission</h2>
              <p className="text-gray-600">Cumulative CO2 equivalent</p>
            </div>
            <div className="text-right">
              <p className="text-5xl font-bold text-green-600">{totalEmission.toFixed(2)}</p>
              <p className="text-gray-600">kg CO2</p>
            </div>
          </div>
        </div>

      {/* Emission Insights */}
<div className="bg-white rounded-xl shadow-lg p-6 mb-8">
  <h3 className="text-xl font-bold text-gray-900 mb-4">
    Emission Insights
  </h3>

  <p className="mb-2">
    Highest emission source: <strong>{highestEmission.type}</strong>
  </p>

 {lastWeek === 0 ? (
    <p className="mb-2">
      Not enough data yet to compare weekly emissions.
    </p>
  ) : (
    <p className="mb-2">
  {lastWeek <= 5
    ? "Not enough data for meaningful weekly comparison"
    : `Your emissions ${
        change > 0 ? "increased" : "decreased"
      } by ${Math.abs(change).toFixed(1)}% compared to last week.`}
</p>
  )}

  <p>
    Suggested goal: Reduce <strong>{targetReduction.toFixed(2)} kg CO₂</strong> this week.
  </p>
</div>
       {/* Emissions by Type (ploty.js Bar Chart) */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Emissions by Type</h3>

          <Plot
  data={[
    {
  x: ["Travel", "Electricity", "Waste"],
  y: [travelEmission, electricityEmission, wasteEmission],
  type: "bar",
  width: 0.4,
  marker: {
    color: ["#4ade80", "#16a34a", "#65a30d"]
  },
}
  ]}
  layout={{
    title: "Emissions by Activity Type",
    xaxis: { title: "Activity Type" },
    yaxis: { title: "CO2 Emissions (kg)" },
    height: 400,
    bargap: 0.5,
    margin: { t: 40, l: 50, r: 20, b: 50 }
  }}
  style={{ width: "100%" }}
/>
        </div>
 {/* Emissions by date (ploty.js line Chart) */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
  <h3 className="text-xl font-bold text-gray-900 mb-4">
    Daily Emission Trend
  </h3>

  <Plot
  data={[
    {
      x: sortedDates,
      y: emissionsOverTime,
      type: "scatter",
      mode: "lines+markers",
      line: {
  color: "#16a34a",
  width: 3,
  shape: "spline"
},
      marker: { size: 6 }
    }
  ]}
  layout={{
    height: 320,
    margin: { l: 60, r: 20, t: 20, b: 60 },

    xaxis: {
      title: { text: "Date" },
      type: "date",
      showgrid: false,
      showline: true,
      linecolor: "#374151",
      linewidth: 2
    },

    yaxis: {
      title: { text: "CO₂ Emissions" },
      gridcolor: "#e5e7eb",
      zeroline: false,
      showline: true,
      linecolor: "#374151",
      linewidth: 2
    }
  }}

  style={{ width: "100%" }}
/>
</div>
        {/* Suggestions Section */}
        <div id="suggestions-section" className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Personalized Suggestions</h2>
          <div className="space-y-4">
            {suggestions.map((suggestion, index) => (
              <div key={index} className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
                <div className="bg-green-100 p-3 rounded-lg">
                  <suggestion.icon className="text-green-600" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900">{suggestion.title}</h3>
                  <p className="text-gray-600 mt-1">{suggestion.description}</p>
                  <span className="inline-block mt-2 text-sm font-semibold text-green-600">{suggestion.impact}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}


// History Page
function HistoryPage({ activities }) {
const [search, setSearch] = useState("");
const filteredActivities = activities.filter(activity =>
  activity.type.toLowerCase().includes(search.toLowerCase())
);
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900">Activity History</h1>
          <p className="text-gray-600 mt-2">View all your past carbon emission activities</p>
        </div>

        {/* Download CSV Button */}
<div className="mb-4">
  <button
    onClick={() => {
      const userId = localStorage.getItem("user_id");
      window.open(`http://127.0.0.1:5000/export/csv/${userId}`, "_blank");
    }}
    className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
  >
    Download CSV
  </button>
</div>
<input
  type="text"
  placeholder="Search by activity type..."
  value={search}
  onChange={(e) => setSearch(e.target.value)}
  className="mb-4 w-72 px-3 py-2 border border-gray-300 rounded-lg"
/>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {activities.length === 0 ? (
            <div className="p-12 text-center">
              <History className="text-gray-400 mx-auto mb-4" size={64} />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No Activities Yet</h3>
              <p className="text-gray-600">Start tracking your carbon footprint by adding activities</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Date</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Activity Type</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Value</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Emission (kg CO2)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {filteredActivities.map((activity) => (
                    <tr key={activity.id} className="hover:bg-gray-50 transition">
                      <td className="px-6 py-4 text-sm text-gray-900">{activity.date}</td>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">{activity.type}</td>
                      <td className="px-6 py-4 text-sm text-gray-600">{activity.value}</td>
                      <td className="px-6 py-4 text-sm font-semibold text-green-600">{activity.emission.toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// Learn Page
function LearnPage() {
  const articles = [
    {
      title: "What is Carbon Footprint?",
      source: "Medium",
      link: "https://medium.com/the-environment/how-we-reduced-our-co2-emissions-and-met-the-paris-climate-goals-da41a1224515"
    },
    {
      title: "Importance of Reducing Emissions",
      source: "Medium",
      link: "https://eaasglobal.medium.com/the-significance-of-carbon-footprints-5eb826f21fb4"
    },
    {
      title: "Simple Ways to Reduce Carbon Footprint",
      source: "Science Times",
      link: "https://www.sciencetimes.com/articles/61035/20251230/carbon-footprint-101-what-it-simple-ways-reduce-yours.htm"
    }
  ];

  const videos = [
    {
      title: "What is Carbon Footprint?",
      url: "https://www.youtube.com/embed/8q7_aV8eLUE"
    },
    {
      title: "How to Reduce Carbon Emissions",
      url: "https://www.youtube.com/embed/EtW2rrLHs08"
    }
  ];

  const tips = [
    "Turn off lights and appliances when not in use",
    "Use public transport or carpool",
    "Avoid single-use plastic products",
    "Switch to LED bulbs",
    "Recycle and compost waste"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900">Learn About Sustainability</h1>
          <p className="text-gray-600 mt-2">
            Explore articles, videos, and tips to reduce your carbon footprint
          </p>
        </div>

        {/* Articles Section */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">  Articles</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {articles.map((article, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
                <h3 className="text-lg font-semibold text-gray-900">{article.title}</h3>
                <p className="text-sm text-gray-500 mb-2">{article.source}</p>
                <a
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 font-medium hover:underline"
                >
                  Read More →
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Videos Section */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">  Videos</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {videos.map((video, index) => (
              <div key={index} className="bg-white p-4 rounded-xl shadow">
                <h3 className="font-semibold mb-2">{video.title}</h3>
                <iframe
                  width="100%"
                  height="220"
                  src={video.url}
                  title={video.title}
                  allowFullScreen
                  className="rounded-lg"
                ></iframe>
              </div>
            ))}
          </div>
        </div>

        {/* Tips Section */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">  Quick Tips</h2>
          <div className="bg-white p-6 rounded-xl shadow">
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              {tips.map((tip, index) => (
                <li key={index}>{tip}</li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
}

// profilepage

function ProfilePage() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const userId = localStorage.getItem("user_id");
    if (!userId) return;

    fetch(`http://127.0.0.1:5000/profile/${userId}`)
      .then(res => res.json())
      .then(data => setProfile(data))
      .catch(err => console.error("Failed to load profile", err));
  }, []);

  if (!profile) {
    return <div className="p-8 text-center">Loading profile...</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-8">
      <div className="max-w-xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">My Profile</h1>

        <div className="space-y-4">
          <div>
            <p className="text-gray-500 text-sm">Full Name</p>
            <p className="text-lg font-semibold">{profile.name}</p>
          </div>

          <div>
            <p className="text-gray-500 text-sm">Email</p>
            <p className="text-lg font-semibold">{profile.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
}


// Main App Component
export default function CarbonFootprintTracker() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    const userId = localStorage.getItem("user_id");
    if (!userId) return;

    fetch(`http://127.0.0.1:5000/activities/${userId}`)
      .then(res => res.json())
      .then(data => setActivities(data))
      .catch(err => console.error("Failed to load activities", err));
  }, [isLoggedIn]);

  return (
    <div className="min-h-screen">
      <Navbar 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage}
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
      />

      {currentPage === 'home' && <HomePage setCurrentPage={setCurrentPage} />}
      {currentPage === 'login' && <LoginPage setCurrentPage={setCurrentPage} setIsLoggedIn={setIsLoggedIn} />}
      {currentPage === 'register' && <RegisterPage setCurrentPage={setCurrentPage} />}
      {currentPage === 'dashboard' && <DashboardPage setCurrentPage={setCurrentPage} activities={activities} />}
      {currentPage === 'add-activity' && (
        <AddActivityPage
          setCurrentPage={setCurrentPage}
          activities={activities}
          setActivities={setActivities}
        />
      )}
      {currentPage === 'report' && <ReportPage activities={activities} />}
      {currentPage === 'history' && <HistoryPage activities={activities} />}
      {currentPage === 'learn' && <LearnPage />}
      {currentPage === 'profile' && <ProfilePage />}
      <ToastContainer position="bottom-right" autoClose={3000} />
    </div>
  );
}
