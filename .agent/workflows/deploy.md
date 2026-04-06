---
description: How to deploy the application to Firebase (New Account)
---

Follow these steps to deploy your portfolio using a new Firebase account and project:

1. **Logout from Old Account (Optional)**
   If you haven't already, ensure you are logged out of any previous accounts.
   ```bash
   npx firebase logout
   ```

2. **Login to New Account**
   Run this command and follow the browser prompts to link your new Google account.
   ```bash
   npx firebase login
   ```

3. **Select Your Project**
   Point the CLI to your new project (`roubletuli-s`).
   ```bash
   npx firebase use roubletuli-s
   ```
   *Note: If you haven't added the project alias yet, use `npx firebase use --add` and select `roubletuli-s`.*

4. **Build the Application**
   Create a fresh static export of your site.
   ```bash
   npm run build
   ```

5. **Deploy to Hosting**
   Upload the `out` directory to your new project.
   // turbo
   ```bash
   npx firebase deploy
   ```

6. **Verify Deployment**
   Once complete, open the provided hosting URL (e.g., `https://roubletuli-s.web.app`) to view your site.
