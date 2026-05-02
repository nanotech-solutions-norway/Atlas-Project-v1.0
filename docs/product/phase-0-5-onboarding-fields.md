# Atlas Phase 0.5 Onboarding Field Map

Status: Phase 0.5 staged
Timestamp: 10:20, 02.05.2026 Europe/Oslo
Owner system: GitHub
Downstream system: Wix Forms / Wix CMS / future Phase 2 handoff

## Purpose

This document defines the minimum structured intake fields required for Wave 1 package pages. It is not a final Azure handoff contract. It is the Phase 0.5 commercial/onboarding input model that enables Phase 1 Wix page and form construction.

## Global fields for all Wave 1 packages

| Field key | Label | Type | Required | Notes |
|---|---|---|---|---|
| `packageId` | Selected package | hidden/string | yes | Must match package ID from `ProductPackages`. |
| `customerType` | Customer type | select | yes | Business, student, consumer, other. |
| `name` | Name | text | yes | Personal data; handle under privacy notice. |
| `email` | Email | email | yes | Validate format. |
| `country` | Country | select/text | yes | Important for compliance and language handling. |
| `preferredLanguage` | Preferred language | select | yes | English, Norwegian, other. |
| `urgency` | Timeline | select | no | Immediate, 1-2 weeks, 1 month, exploratory. |
| `dataSensitivity` | Sensitivity level | select | yes | Low, medium, high. High routes to human review / future managed-secure mode. |
| `deliveryPreference` | Preferred delivery | select | no | Native package, guided setup, managed secure mode later, not sure. |
| `notes` | Additional context | textarea | no | Use privacy warning; discourage sensitive data in Phase 1 shell. |
| `consentPrivacy` | Privacy consent | checkbox | yes | Must be aligned with final privacy policy. |

## Package-specific fields

### Executive Work Copilot

| Field key | Label | Type | Required |
|---|---|---|---|
| `professionalRole` | Role or function | text | yes |
| `recurringOutputs` | Main recurring outputs | multi-select | yes |
| `tonePreference` | Preferred tone | select | no |
| `industryContext` | Industry context | text | no |
| `templateNeeds` | Template needs | multi-select | no |

### Commercial Growth Copilot

| Field key | Label | Type | Required |
|---|---|---|---|
| `buyerPersona` | Buyer persona | text | yes |
| `offerType` | Offer type | text | yes |
| `salesStage` | Sales stage | select | yes |
| `mainObjections` | Main objections | textarea | no |
| `proofAssetsAvailable` | Proof assets available | multi-select | no |
| `geographicMarket` | Geographic market | text | no |

### Accounting & Bookkeeping Expert

| Field key | Label | Type | Required |
|---|---|---|---|
| `entityType` | Entity type | select | yes |
| `vatRegistered` | VAT registered | select | yes |
| `accountingSystem` | Accounting system | select/text | yes |
| `reportingPeriod` | Reporting period | text | no |
| `taskType` | Task type | multi-select | yes |
| `filesExpected` | Will files be reviewed? | select | yes |
| `validationLevel` | Desired validation level | select | yes |

### Study Planner & Exam Coach

| Field key | Label | Type | Required |
|---|---|---|---|
| `educationLevel` | Education level | select | yes |
| `subjects` | Subjects | text | yes |
| `examDates` | Exam or deadline dates | text | no |
| `weeklyAvailability` | Weekly availability | text | no |
| `studyMaterialType` | Material type | multi-select | no |
| `studyStyle` | Preferred study style | select | no |

### Personal Life Organizer

| Field key | Label | Type | Required |
|---|---|---|---|
| `primaryPainPoint` | Main planning pain point | text | yes |
| `weeklyResponsibilities` | Weekly responsibilities | textarea | no |
| `planningHorizon` | Planning horizon | select | no |
| `householdContext` | Household context | text | no |
| `currentTools` | Current planning tools | text | no |

## Routing rules for Phase 1 Wix implementation

1. If `dataSensitivity = high`, route to guided review rather than self-serve delivery.
2. If package is Accounting & Bookkeeping Expert and files are expected, display a compliance and human-review notice.
3. If package is Study Planner & Exam Coach, display academic integrity notice.
4. If package is Personal Life Organizer, display regulated-advice boundary notice.
5. If package is Commercial Growth Copilot, display claim-validation notice for customer-facing outputs.
6. If delivery preference is Managed Secure Mode, mark as future-state / consultation path until Phase 3 and Phase 4 are implemented.

## Privacy and compliance notes

- Do not request sensitive personal, financial, or legal details in the public Wix shell unless necessary.
- Use privacy notice and consent checkbox before submission.
- For high-sensitivity cases, collect only enough context to route the lead.
- Detailed files and protected data should wait for later controlled workflow design.

## Phase 0.5 acceptance criteria

This field map is accepted when:

- all Wave 1 packages have minimum intake fields,
- high-sensitivity routing is defined,
- regulated-domain notices are mapped,
- the fields can be translated into Wix forms or CMS schema without changing package identity.
