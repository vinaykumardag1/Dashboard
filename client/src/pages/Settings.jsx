import React, { useState } from 'react'

const Settings = () => {
  const [theme, setTheme] = useState('light');
  const [fontSize, setFontSize] = useState('medium');

  const handleThemeChange = (e) => {
    setTheme(e.target.value);
    // Apply theme change logic here
  };

  const handleFontSizeChange = (e) => {
    setFontSize(e.target.value);
    // Apply font size change logic here
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">Settings</h2>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="theme">
            Theme
          </label>
          <select
            id="theme"
            value={theme}
            onChange={handleThemeChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fontSize">
            Font Size
          </label>
          <select
            id="fontSize"
            value={fontSize}
            onChange={handleFontSizeChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
        </div>
        <div className="flex items-center justify-between">
          <button
            type="button"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={() => {
              // Save settings logic here
              alert('Settings saved!');
            }}
          >
            Save Settings
          </button>
        </div>
      </form>
    </div>
  )
}

export default Settings
