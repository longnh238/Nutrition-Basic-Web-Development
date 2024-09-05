# Nutrition Website Project

## I. Introduction

This website provides information about nutrition, healthy eating habits, and lifestyle choices. It also includes tools for calculating BMI and daily calorie needs, and offers helpful nutrition advice.

The project originated from a shared interest in nutrition and healthy diets. Observations of students struggling with maintaining a balanced diet due to busy academic schedules led to the creation of this website. The goal is to promote healthier eating habits and potentially serve as a foundation for more advanced projects in the future.

## II. Website Layout

### Home Page Layout

The homepage layout includes a header with the website logo and navigation links, a main content area featuring various sections and images, and a footer. 

### Menu Recommendation Layout

The Menu Recommendation page includes a similar layout to the homepage, with added functionality for user input forms to calculate BMI and daily calorie needs, and to provide personalized menu recommendations.

### FAQ Layout

The FAQ page lists answers to frequently asked questions that expand or collapse upon user interaction. A contact form is also available for additional inquiries.

The layout design incorporates several techniques:
- **CSS Float**: Used for creating table-like columns without actual tables. Float values include left, right, none, and inherit.
- **CSS Flexbox**: Utilized for flexible layout arrangements, enabling easy alignment and distribution of items within containers.
- **Positioning**: Applied to fix elements, such as the "Top" button, in place while scrolling.

## III. Website Organization

The website is structured into three main pages:

1. **Homepage**: Features a header with navigation links, a main content area with sections and images, and a footer. JavaScript functions enhance user interaction, such as scrolling back to the top of the page.

2. **Menu Recommendation**: Includes a form for inputting height, weight, age, and lifestyle to calculate BMI and daily calorie needs. Menu recommendations are displayed based on the user’s input.

3. **FAQ Page**: Provides answers to frequently asked questions that expand or collapse on click. A contact form allows users to submit inquiries.

## IV. Content Declaration

- **Homepage**: Introduces the purpose of the website, highlights trending topics, and provides healthy tips through a popular video.
- **Menu Recommendation**: Users input personal data to receive BMI calculations, daily calorie needs, and personalized nutrition recommendations.
- **FAQ**: Lists common nutrition questions and offers a contact form for additional questions.

## V. The Highlight (Bragging) Part

1. **Dynamic Nutrition Menu Recommendation**: Collects user details to generate a customized menu based on BMI and daily calorie needs, ensuring personalized meal plans.

2. **Top Button**: Improves navigation by allowing users to return to the top of the page with a single click. Implemented using JavaScript event listeners for smooth scrolling.

3. **Click-to-Show Tooltip and Collapsible Lists**: Tooltips provide additional information on click, while collapsible FAQ lists manage content visibility and enhance accessibility.

4. **Form Submission Using iFrame**: Handles form submissions without page reloads, maintaining a seamless user experience through the use of an iframe.
