# Technical Implementation

## File Structure
- IrisAPP: Simple interactive React Native app with navigation and screens to display key features
- MapsInterface: Leveraging Google's API services to display an interactive map with nearby hospitals, their ratings, and addresses. This feature is also implemented in IrisApp.
- ReportGeneration: report.html mimics our final symptom tracking form to accept user input and convert it into a line graph over time. export.html shows functionality for exporting the generated graphs as a comprehensible PDF. These features are also implemented in IrisApp.

## Data
To help women navigate the resources available to them easily, we decided to use Google's Map Platform web services as they have the most comprehensive, accessible, and up-to-date data for location services. The APIs we used are:
- Google Maps API
- Google Places API


## Privacy, security, and civil liberty 
Users are completely in control of their data. Since we are dealing with sensitive medical data, all information we collect stays within the app and is not Personally Identifiable. The app does not facilitate third-party sharing or access to medical data. The user can provide the generated report to their health care provider if they choose to do so.

## Innovation 
One of the key features of the app is to transform experiential data into useful medical data for health care providers and expecting mothers to analyze at a glance. This helps save valuable time and can help flag potential risks on time. 
