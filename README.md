# Beauty Clinic App

This project is a web application designed for a beauty clinic to showcase their services, pricing, and provide contact information for clients. The application has been built using React.js, and it is deployed on GitHub Pages. The app is fully responsive and offers users a seamless experience across different devices.

## FEATURES

- **Dynamic Routing:** The app uses React Router for navigation between different pages.
- **Modal Integration:** Clients can easily schedule an appointment through a modal pop-up with contact details.
- **Responsive Design:** The application is fully responsive and optimized for various screen sizes.
- **Modern UI:** Leveraging Material UI (MUI) for sleek, professional design components.
- **Scroll to Top Button:** A smooth scroll to top button is included to improve user experience.

## RESPONSIVE DESIGN

This application has been designed to provide an optimal viewing experience across a wide range of devices. The layout and styling adapt to different screen sizes using CSS media queries.

### BREAKPOINTS:

- **Mobile:** Default styles apply for small screens (up to **375px** wide).
- **Tablet:** For devices with a screen width of **768px** and above, additional styles are applied to enhance the user experience on medium-sized screens.
- **Desktop:** For screens with a minimum width of **1440px**, the layout and design are further adjusted for large displays.

The application ensures a seamless and consistent experience for users on mobile devices, tablets, and desktop screens.

## PAGES

The application contains the following main pages:

1. **Zabiegi (Services)** - `/zabiegi`

   - This page lists the clinic's treatments and procedures. Each treatment has a detailed description accessible via the page.

2. **O Nas (About Us)** - `/o-nas`

   - This section introduces the clinic, its mission, and team members.

3. **Cennik (Pricing)** - `/cennik`

   - A detailed pricing page that shows the cost of different beauty treatments.

4. **Pytania i Odpowiedzi (FAQ)** - `/pytania-i-odpowiedzi`

   - A Frequently Asked Questions page to help clients with common inquiries about services and procedures.

5. **Kontakt (Contact)** - `/kontakt`

   - The contact page includes a form, phone number, email, and social media links for clients to reach out to the clinic.

6. **Not Found (404)** - `*`
   - A 404 page is displayed if a user navigates to a non-existent route.

## TECHNOLOGIES USED

- **React.js:** The core framework for building the user interface.
- **React Router:** Handles dynamic routing in the application.
- **MUI (Material UI):** Used for pre-built React components and icons to ensure a modern design.
- **Emotion Styled Components:** For custom styling.
- **Swiper.js:** Used for any carousel or sliders within the application.
- **React Icons:** Provides the application with various icons.
- **Scroll-Lock:** To manage scroll behavior within modals.

## INSTALLATION & SETUP

To run the project locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/InnaAnatoliivna/beauty-clinic-app.git
   cd beauty-clinic-app
   ```

2. Install dependencies:

### `npm install`

3.Run the app:

### `npm start`

4.Build the app:

### `npm run build`

## Deployment

The application is deployed to GitHub Pages. To deploy any changes:

1. Pre-deploy:

### `npm run predeploy`

2. Deploy:

### `npm run deploy`

###### HOW YOU CAN CHANGE YOUR CLINIC'S INFORMATION

PLEASE, WHEN MAKING CHANGES TO DATA FILES - STRICTLY FOLLOW THE FORMAT OF WRITING

Here are the ways you can find and change clinic information:

1. edit social media links

## `src/utils/links.js`

2. edit the contact information of the clinic (attention - you must add a separate phone number in the correct format for making a call(phoneToCall) and a separate phone number for aesthetic display(phoneToShow))

## `srs/resources/dataContacts.json`

3. edit the clinic's working hours

## `srs/resources/dataScheduleOfWork.json`

4.  change the names of menu items / add a menu item

## `srs/resources/menuList.json`

5.  edit the list of services

## `src/utils/servicesList.js`

6. edit services in path='zabiegi/:id' element=<ServiceDescription>

## `src/utils/servicesHelpers.js`

7. edit a specific service

## `src/resources/dataServices/...` > here select the file with the appropriate service

8. edit info (name, price, duration, discount) in PricePage

## `srs/resources/dataServices.json`

9. edit the description of the clinic and employees (the description of the clinic is divided into several parts (subtitle, suptitle) to improve visualization)

## `srs/resources/dataAboutUs.json`

10. edit/add frequently asked questions and answers about the clinic's services

## `srs/resources/QuestionAnswer.json`

11. add user feedback

## `srs/resources/usersFeedback.json`
