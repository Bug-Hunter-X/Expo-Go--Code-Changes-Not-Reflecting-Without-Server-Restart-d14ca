The issue appears to be related to caching or a communication problem between Expo Go and the development server. Here are a few potential solutions:

1. **Clear Expo Go Cache:** Completely close and restart the Expo Go app.  On Android, clearing the app's cache and data might help.
2. **Check Network Connectivity:** Ensure a stable network connection between your device and development machine.
3. **Restart the development server:**  This is the most reliable solution but it's an inefficient workaround. 
4. **Verify development server configuration:**  Ensure your development server is configured correctly and is using the expected port number.
5. **Update Expo CLI:** Run `expo update` to make sure you have the latest version of the Expo CLI. This can sometimes resolve underlying issues.
6. **Check for conflicting packages:** If the issue persists, check for any conflicting packages in your project's `package.json` and `package-lock.json` files. Make sure there are no versions mismatch in the installed packages.
7. **Rebuild the project:** Run `expo prebuild` and then `expo start` for a fresh start. If it works, try a newer version of expo, and if it still fails, check the expo documentation for an update or any possible issues related to the problem.  

If none of these solutions work, provide more details, including the Expo CLI version, the React Native version, the device you're using, and any relevant error messages.