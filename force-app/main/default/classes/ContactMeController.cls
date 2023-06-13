global class ContactMeController {

    @AuraEnabled
    public static void createLead(String firstname, String lastname, 
                                    String company, String email, String description) {
        Lead lead = new Lead();

        lead.FirstName = firstname;
        lead.LastName = lastname;
        lead.Company = company;
        lead.Email = email;
        lead.Description = description;

        insert lead;                
    }
}