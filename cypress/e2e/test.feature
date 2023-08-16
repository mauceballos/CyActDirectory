Feature: Azure Active Directory Authentication

    Background: login with valid credentials
        Given I am on the login page
        When I enter valid <credentials>
        Then I should be logged in
        Examples:
            | credentials                             |
            | mauricio.ceballos@fligoo.com,Mau$Ce2021 |