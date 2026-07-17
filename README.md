# Blockchain Election Portal

A secure, transparent, and decentralized voting system built using Ethereum Blockchain, Node.js, and MySQL. Features include Aadhar-based verification with OTP authentication and an administrative control panel.

---

## Getting Started (A-Z Setup Guide)

Follow these steps exactly to get the project running on your local machine.

### 1. Prerequisites
Ensure you have the following installed:
*   Node.js (v14 or higher)
*   MySQL Server (XAMPP or standalone)
*   Ganache (Personal Ethereum Blockchain)
*   MetaMask Extension (Browser wallet)
*   DBeaver (For easy database management)

---

### 2. Database Setup (MySQL)
1.  Open your MySQL terminal or DBeaver.
2.  Run the contents of init_db.sql found in the root directory.
    *   This creates the aadhar database and necessary tables.
    *   It also inserts a test Admin account.
3.  Fill Example Data:
    *   Run the contents of fill_aadhar_db_.sql to populate the database with example Aadhar records.
4.  Alternatively, you can run node setup_db.js to create the tables automatically.

---

### 3. Blockchain Setup (Ganache and MetaMask)
1.  Launch Ganache: Create a new workspace.
2.  Configure Ganache Settings: 
    *   Go to Settings (Gear icon) -> Server.
    *   Set Port Number to 7545.
    *   Set Network ID to match your `.env` configuration (default is usually 5777 or 1337).
3.  Configure MetaMask:
    *   Add a Custom RPC Network:
        *   Network Name: Ganache
        *   New RPC URL: http://127.0.0.1:7545
        *   Chain ID: (Must match the ID set in your `.env` file)
    *   Import Accounts: Copy the Private Key of Account 0 from Ganache and import it into MetaMask (This will be your Admin Account).
4.  Compile and Migrate Contracts:
    In your project root, run:
    ```bash
    truffle migrate --reset
    ```

---

### 4. Gmail OTP Setup (Required)
The system sends a real OTP to the email address linked to the Aadhar number.
1.  Go to your Google Account Settings.
2.  Enable 2-Step Verification.
3.  Search for "App Passwords".
4.  Create a new app (e.g., "Election Portal") and copy the 16-character code.

---

### 5. Configuration (.env)
1.  Create a file named .env in the root directory.
2.  Copy the contents of .env.example into .env.
3.  Fill in your details:
    ```env
    EMAIL_USER=your-actual-email@gmail.com
    EMAIL_PASS=xxxxyyyyzzzzaaaa  # No spaces
    DB_PASS=your-mysql-password
    ```

---

### 6. Installation and Launch
1.  Open your terminal in the project folder.
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Start the development server:
    ```bash
    npm run dev
    ```
4.  Access the portal at: http://localhost:3000

---

## Administrative Workflow
1.  Login: Use admin@test.com and password password.
2.  Add Candidates: Ensure your MetaMask is on the Admin Account. Candidates must be 21+ years old.
3.  Register Voters: After users complete the Aadhar/OTP process on the site, the Admin must manually register their address on the blockchain in the Register tab.
4.  Start Election: Switch the phase to "Voting is live!".
5.  View Results: Switch the phase to "Election Over" to reveal the final tally.

---

## Resetting the Election
To start a fresh election:
1.  Run truffle migrate --reset.
2.  Go to the Change Phase tab in the Admin panel and click "Reset Database".
3.  Clear MetaMask activity (Settings > Advanced > Clear activity tab data).

---

## License
This project is licensed under the GNU General Public License v3.0 - see the [LICENSE](LICENSE) file for details.
