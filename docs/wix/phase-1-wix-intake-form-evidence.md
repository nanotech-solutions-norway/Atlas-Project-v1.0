# Phase 1 Wix Intake Form Evidence

Status: Implemented and validated
Timestamp: 13:45, 02.05.2026 Europe/Oslo
Owner system: Wix / GitHub
Target site: Atlas Project V1
Wix site ID: `bb5ac407-bcbb-451f-a2ad-65459e47b8d4`

## Objective

Create a master Wave 1 package-intake form in Wix so Phase 1 package pages can route visitors into structured onboarding capture.

## Form created

| Field | Value |
|---|---|
| Form name | Atlas Wave 1 Package Intake |
| Form ID | `01dc5dc1-56d2-4ee6-8496-6700da326afb` |
| Namespace | `wix.form_app.form` |
| Enabled | Yes |
| Spam filter | Advanced |
| Submission access | Owner and collaborators |
| Submit success action | Thank-you message |

## Form fields

| Field | Target | Required | PII |
|---|---|---:|---:|
| First name | `first_name_0001` | Yes | Yes |
| Last name | `last_name_0002` | Yes | Yes |
| Email | `email_0003` | Yes | Yes |
| Selected package | `selected_package_0004` | Yes | No |
| Customer type | `customer_type_0005` | Yes | No |
| Data sensitivity level | `data_sensitivity_0006` | Yes | No |
| Preferred delivery | `delivery_preference_0007` | No | No |
| Primary use case or objective | `use_case_0008` | Yes | No |
| Additional context - do not include sensitive data | `notes_0009` | No | No |
| Submit intake request | submit button | N/A | No |

## Contact trigger

The form maps first name, last name, and email to Wix Contacts through the upsert-contact trigger.

Mapped contact fields:

- `first_name_0001` → `FIRST_NAME`
- `last_name_0002` → `LAST_NAME`
- `email_0003` → `EMAIL`

## Thank-you message

```text
Thank you. Your Atlas package intake request has been received.
```

## Validation result

The Wix API returned a successful form creation response and confirmed all expected fields were present in the created form.

## Limits

This action created the Wix form schema. It does not automatically place the form onto a visual page or connect CTA buttons. Page placement and visual binding still require Wix editor/API support in the next Phase 1 workstream.

## Next actions

1. Place or embed the form on the Atlas intake/onboarding page.
2. Link Wave 1 package CTA buttons to this form or to the page section containing it.
3. Add visible privacy and data-sensitivity notices near the form.
4. Test one non-sensitive submission manually in Wix.
5. Validate that contact upsert appears in Wix Contacts.
