// Simply replace the logo part with text - this is the fix for the logo issue

// Find this in App.js around line 359:
/*
          <div class="company-info">
            <img src="data:image/png;base64,...long base64 string..." class="company-logo" alt="studio.ec logo">
          </div>
*/

// Replace with:
/*
          <div class="company-info">
            <h1 style="margin: 0; font-size: 36px; font-weight: bold;">studio.ec</h1>
            <p style="margin: 2px 0; color: #666; font-size: 14px;">architecture + research</p>
          </div>
*/