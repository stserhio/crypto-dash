
![cryptodash](https://github.com/user-attachments/assets/4eeaa354-abea-43c7-a1b7-f913bc12d805)

# 🚀 CryptoDash: Modern Cryptocurrency Dashboard

A sleek, responsive, and real-time cryptocurrency tracking application built with **React 19**, **Vite**, and **Chart.js**. Monitor the latest prices, market caps, and 24h changes of your favorite digital assets.

## ✨ Features

- 📊 **Real-time Price Tracking**: Stay updated with the latest market data directly from the CoinGecko API.
- 🔍 **Smart Search**: Quickly find any cryptocurrency by its name or ticker symbol.
- 📈 **Interactive Charts**: Detailed 7-day price charts for every coin to visualize trends.
- 🔢 **Customizable View**: Adjust the number of coins displayed (10, 20, 50, etc.).
- 🛡️ **Fault Tolerant**: Built-in safety checks for missing or null market data to ensure a smooth experience.
- 📱 **Responsive Design**: Works perfectly on desktops, tablets, and mobile devices.

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Routing**: [React Router 7](https://reactrouter.com/)
- **Charts**: [Chart.js](https://www.chartjs.org/) + [React-Chartjs-2](https://react-chartjs-2.js.org/)
- **Styling**: Modern Vanilla CSS
- **API**: [CoinGecko API](https://www.coingecko.com/en/api)

## 🚀 Getting Started

Follow these steps to get the project running locally:

### 1. Clone the repository
```bash
git clone https://github.com/stserhio/crypto-dash.git
cd crypto-dash
```

### 2. Install dependencies
```bash
npm install
```

### 3. Set up Environment Variables
Create a `.env` file in the root directory and add the following:
```env
VITE_COINS_API_URL=https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD
VITE_COIN_API_URL=https://api.coingecko.com/api/v3/coins
```

### 4. Launch the development server
```bash
npm run dev
```

---

## 📂 Project Structure

```text
src/
├── components/      # Reusable UI elements (Cards, Charts, Filters)
├── pages/           # Main application screens (Home, Details, About)
├── assets/          # Static images and icons
├── App.jsx          # Root component & Data Fetching logic
└── index.css        # Global styles & Design system
```

## 🤝 Contributing

Contributions are welcome! If you have ideas for new features or improvements, feel free to fork the repository and submit a pull request.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

Distributed under the MIT License.

---
*Created with ❤️ by [stserhio](https://github.com/stserhio)*
