Feature('Checkout Form Filling');

Scenario('fill all fields in the checkout form without submitting', async ({ I }) => {
    // Assuming you are already on the page containing this form.
    // If not, you'd typically start with:
    I.amOnPage('https://getbootstrap.com/docs/5.1/examples/checkout/');
    // I.see('Checkout form'); // Optional: Verify you are on the correct page

    I.say('Starting to fill the checkout form...');

    // --- Fill Text and Email Inputs ---
    I.fillField('#firstName', 'John');
    I.fillField('#lastName', 'Doe');
    I.fillField('#username', 'johndoe_test');
    I.fillField('#email', 'john.doe@example.com');
    I.fillField('#address', '123 Test Street');
    I.fillField('#address2', 'Apt 101'); // Optional field

    // --- Select Dropdown Options ---
    I.selectOption('#country', 'United States'); // Select by value or visible text
    I.selectOption('#state', 'California');       // Select by value or visible text

    // --- Fill Zip Code ---
    I.fillField('#zip', '90210');

    // --- Check Checkboxes ---
    I.checkOption('#same-address'); // Checks the "Shipping address is the same as my billing address" checkbox
    I.checkOption('#save-info');    // Checks the "Save this information for next time" checkbox

    // --- Select Radio Button for Payment Method ---
    I.checkOption('#credit'); // Selects the "Credit card" radio button

    // --- Fill Credit Card Details (these fields might become visible/enabled after selecting a payment method) ---
    I.fillField('#cc-name', 'John A. Doe');
    I.fillField('#cc-number', '4111222233334444'); // Example number
    I.fillField('#cc-expiration', '12/25');       // Example expiration
    I.fillField('#cc-cvv', '123');                // Example CVV

    I.say('All form fields have been filled.');

    // Important: No I.click('Continue to checkout') or I.submitForm() is used here
    // to ensure the form is NOT submitted, as per your request.

    // You might add a wait here if you want to visually inspect the filled form
    // before the test finishes.
    // I.wait(5); // Wait for 5 seconds to observe the filled form
});