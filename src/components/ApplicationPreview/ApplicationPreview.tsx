"use client";

import { ChangeEvent, useState } from "react";
import styles from "./ApplicationPreview.module.css";

const steps = [
  "Choose Program",
  "Parent Details",
  "Guardian Info",
  "Academic Info",
  "Upload Documents",
  "Review & Submit",
];

const programs = [
  {
    title: "Junior School",
    subtitle: "Grade 7 – Grade 9",
    icon: "♙",
    description: "A strong foundation for confident young learners.",
  },
  {
    title: "Middle School",
    subtitle: "Grade 10 – Grade 11",
    icon: "▥",
    description: "Developing academic depth, character and independence.",
  },
  {
    title: "Senior School",
    subtitle: "Grade 12 – Grade 13",
    icon: "♧",
    description: "Preparing students for higher education and leadership.",
  },
];

type FormData = {
  parentName: string;
  parentPhone: string;
  parentEmail: string;
  guardianName: string;
  relationship: string;
  guardianPhone: string;
  currentSchool: string;
  currentGrade: string;
};

const initialFormData: FormData = {
  parentName: "",
  parentPhone: "",
  parentEmail: "",
  guardianName: "",
  relationship: "",
  guardianPhone: "",
  currentSchool: "",
  currentGrade: "",
};

export default function ApplicationPreview() {
  const [activeStep, setActiveStep] = useState(0);
  const [selectedProgram, setSelectedProgram] = useState("");
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [uploadedFile, setUploadedFile] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const progress = ((activeStep + 1) / steps.length) * 100;

  const handleNext = () => {
    if (activeStep < steps.length - 1) {
      setActiveStep((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (activeStep > 0) {
      setActiveStep((prev) => prev - 1);
    }
  };

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      setUploadedFile(file.name);
    }
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const restartApplication = () => {
    setActiveStep(0);
    setSelectedProgram("");
    setFormData(initialFormData);
    setUploadedFile("");
    setSubmitted(false);
  };

  if (submitted) {
    return (
      <section className={styles.applicationSection}>
        <div className="container">
          <div className={styles.successCard}>
            <div className={styles.successIcon}>✓</div>

            <span className={styles.eyebrow}>APPLICATION RECEIVED</span>

            <h2>
              Your journey with
              <span> EDU RIDGE DEMO begins here.</span>
            </h2>

            <p>
              Thank you for beginning your admission journey with us.
              Our admissions team will review your application and guide
              you through the next steps.
            </p>

            <div className={styles.successDetails}>
              <div>
                <small>APPLICATION STATUS</small>
                <strong>Received Successfully</strong>
              </div>

              <div>
                <small>SELECTED PROGRAM</small>
                <strong>{selectedProgram || "To be confirmed"}</strong>
              </div>
            </div>

            <button
              className={styles.restartButton}
              onClick={restartApplication}
            >
              START NEW APPLICATION
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={styles.applicationSection}>
      <div className="container">
        {/* =========================
            SECTION INTRO
        ========================== */}

        <div className={styles.sectionIntro}>
          <div>
            <span className={styles.eyebrow}>ADMISSIONS</span>

            <h2>
              Apply to Join
              <span> EduRise  Academy.</span>
            </h2>

            <p>
              Begin your admission journey through a simple, guided and
              transparent application experience.
            </p>
          </div>

          <div className={styles.applicationBadge}>
            <span>SM</span>

            <div>
              <small>ADMISSIONS</small>
              <strong>APPLICATION PREVIEW</strong>
            </div>
          </div>
        </div>

        {/* =========================
            MAIN APPLICATION AREA
        ========================== */}

        <div className={styles.applicationWrapper}>
          {/* =========================
              APPLICATION CARD
          ========================== */}

          <div className={styles.applicationCard}>
            {/* HEADER */}

            <div className={styles.cardHeader}>
              <div>
                <span className={styles.cardEyebrow}>
                  APPLICATION PROCESS
                </span>

                <h3>{steps[activeStep]}</h3>
              </div>

              <div className={styles.stepProgress}>
                <span>{activeStep + 1} OF {steps.length}</span>

                <div className={styles.progressTrack}>
                  <div
                    className={styles.progressBar}
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>
            </div>

            {/* =========================
                STEPPER
            ========================== */}

            <div className={styles.stepper}>
              {steps.map((step, index) => {
                const isActive = index === activeStep;
                const isCompleted = index < activeStep;

                return (
                  <button
                    key={step}
                    className={`${styles.stepItem} ${
                      isActive ? styles.activeStep : ""
                    } ${isCompleted ? styles.completedStep : ""}`}
                    onClick={() => setActiveStep(index)}
                    aria-label={`Go to ${step}`}
                  >
                    <span className={styles.stepNumber}>
                      {isCompleted ? "✓" : index + 1}
                    </span>

                    <span className={styles.stepLabel}>
                      {step}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* =========================
                FORM CONTENT
            ========================== */}

            <div className={styles.formContent}>
              {/* STEP 1 */}

              {activeStep === 0 && (
                <div className={styles.stepAnimation}>
                  <div className={styles.contentHeading}>
                    <span>STEP 01</span>

                    <h4>Choose Your Program</h4>

                   <p>
  Select the academic stage that best represents the
  student&apos;s next journey.
</p>
                  </div>

                  <div className={styles.programGrid}>
                    {programs.map((program) => (
                      <button
                        key={program.title}
                        onClick={() =>
                          setSelectedProgram(program.title)
                        }
                        className={`${styles.programCard} ${
                          selectedProgram === program.title
                            ? styles.selectedProgram
                            : ""
                        }`}
                      >
                        <div className={styles.programTop}>
                          <span className={styles.programIcon}>
                            {program.icon}
                          </span>

                          {selectedProgram === program.title && (
                            <span className={styles.checkMark}>✓</span>
                          )}
                        </div>

                        <strong>{program.title}</strong>

                        <small>{program.subtitle}</small>

                        <p>{program.description}</p>

                        <span className={styles.programArrow}>→</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* STEP 2 */}

              {activeStep === 1 && (
                <div className={styles.stepAnimation}>
                  <div className={styles.contentHeading}>
                    <span>STEP 02</span>

                    <h4>Parent Details</h4>

                    <p>
                      Tell us about the parent or primary contact.
                    </p>
                  </div>

                  <div className={styles.formGrid}>
                    <label>
                      Full Name

                      <input
                        type="text"
                        name="parentName"
                        value={formData.parentName}
                        onChange={handleInputChange}
                        placeholder="Enter parent name"
                      />
                    </label>

                    <label>
                      Phone Number

                      <input
                        type="tel"
                        name="parentPhone"
                        value={formData.parentPhone}
                        onChange={handleInputChange}
                        placeholder="+254..."
                      />
                    </label>

                    <label className={styles.fullWidth}>
                      Email Address

                      <input
                        type="email"
                        name="parentEmail"
                        value={formData.parentEmail}
                        onChange={handleInputChange}
                        placeholder="parent@email.com"
                      />
                    </label>
                  </div>
                </div>
              )}

              {/* STEP 3 */}

              {activeStep === 2 && (
                <div className={styles.stepAnimation}>
                  <div className={styles.contentHeading}>
                    <span>STEP 03</span>

                    <h4>Guardian Information</h4>

                    <p>
                      Provide guardian or emergency contact details.
                    </p>
                  </div>

                  <div className={styles.formGrid}>
                    <label>
                      Guardian Name

                      <input
                        type="text"
                        name="guardianName"
                        value={formData.guardianName}
                        onChange={handleInputChange}
                        placeholder="Full name"
                      />
                    </label>

                    <label>
                      Relationship

                      <input
                        type="text"
                        name="relationship"
                        value={formData.relationship}
                        onChange={handleInputChange}
                        placeholder="e.g. Parent or Guardian"
                      />
                    </label>

                    <label className={styles.fullWidth}>
                      Phone Number

                      <input
                        type="tel"
                        name="guardianPhone"
                        value={formData.guardianPhone}
                        onChange={handleInputChange}
                        placeholder="+254..."
                      />
                    </label>
                  </div>
                </div>
              )}

              {/* STEP 4 */}

              {activeStep === 3 && (
                <div className={styles.stepAnimation}>
                  <div className={styles.contentHeading}>
                    <span>STEP 04</span>

                    <h4>Academic Information</h4>

                   <p>
  Tell us about the student&apos;s current academic journey.
</p>
                  </div>

                  <div className={styles.formGrid}>
                    <label>
                      Current School

                      <input
                        type="text"
                        name="currentSchool"
                        value={formData.currentSchool}
                        onChange={handleInputChange}
                        placeholder="Enter current school"
                      />
                    </label>

                    <label>
                      Current Grade

                      <select
                        name="currentGrade"
                        value={formData.currentGrade}
                        onChange={handleInputChange}
                      >
                        <option value="">
                          Select current grade
                        </option>

                        <option>Grade 6</option>
                        <option>Grade 7</option>
                        <option>Grade 8</option>
                        <option>Grade 9</option>
                        <option>Grade 10</option>
                        <option>Grade 11</option>
                      </select>
                    </label>
                  </div>
                </div>
              )}

              {/* STEP 5 */}

              {activeStep === 4 && (
                <div className={styles.stepAnimation}>
                  <div className={styles.contentHeading}>
                    <span>STEP 05</span>

                    <h4>Upload Documents</h4>

                    <p>
                      Upload supporting documents to complete the application.
                    </p>
                  </div>

                  <label className={styles.uploadArea}>
                    <input
                      type="file"
                      onChange={handleFileChange}
                      className={styles.fileInput}
                    />

                    <span className={styles.uploadIcon}>↑</span>

                    <strong>
                      {uploadedFile
                        ? "Document Selected"
                        : "Upload Supporting Documents"}
                    </strong>

                    <small>
                      {uploadedFile ||
                        "Birth certificate, academic reports or supporting documents"}
                    </small>

                    <span className={styles.uploadButton}>
                      {uploadedFile
                        ? "CHANGE FILE"
                        : "CHOOSE FILE"}
                    </span>
                  </label>
                </div>
              )}

              {/* STEP 6 */}

              {activeStep === 5 && (
                <div className={styles.stepAnimation}>
                  <div className={styles.contentHeading}>
                    <span>FINAL STEP</span>

                    <h4>Review Your Application</h4>

                    <p>
                      Confirm the information below before submitting.
                    </p>
                  </div>

                  <div className={styles.reviewCard}>
                    <div>
                      <span>SELECTED PROGRAM</span>

                      <strong>
                        {selectedProgram || "No program selected"}
                      </strong>
                    </div>

                    <div>
                      <span>PARENT / PRIMARY CONTACT</span>

                      <strong>
                        {formData.parentName || "Not provided"}
                      </strong>
                    </div>

                    <div>
                      <span>DOCUMENT STATUS</span>

                      <strong>
                        {uploadedFile
                          ? "Document attached"
                          : "No document attached"}
                      </strong>
                    </div>

                    <div>
                      <span>APPLICATION STATUS</span>

                      <strong className={styles.draftStatus}>
                        Ready for submission
                      </strong>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* =========================
                FORM ACTIONS
            ========================== */}

            <div className={styles.formActions}>
              <button
                className={styles.previousButton}
                onClick={handlePrevious}
                disabled={activeStep === 0}
              >
                ← PREVIOUS
              </button>

              <div className={styles.actionStep}>
                STEP {activeStep + 1} OF {steps.length}
              </div>

              <button
                className={styles.nextButton}
                onClick={
                  activeStep === steps.length - 1
                    ? handleSubmit
                    : handleNext
                }
              >
                {activeStep === steps.length - 1
                  ? "SUBMIT APPLICATION ✓"
                  : "CONTINUE →"}
              </button>
            </div>
          </div>

          {/* =========================
              HELP PANEL
          ========================== */}

          <aside className={styles.helpPanel}>
            <div className={styles.helpTop}>
              <div className={styles.helpIcon}>?</div>

              <span>NEED HELP?</span>
            </div>

            <h3>
              Guidance when
              <span> you need it.</span>
            </h3>

            <p>
              Our admissions team is available to answer questions and
              guide families through every stage of the application.
            </p>

            <div className={styles.contactInfo}>
              <div>
                <small>CALL ADMISSIONS</small>

                <strong>+254 700 123 456</strong>
              </div>

              <div>
                <small>EMAIL ADMISSIONS</small>

                <strong>admissions@stmartin.ac.ke</strong>
              </div>
            </div>

            <div className={styles.helpDivider} />

            <div className={styles.helpNote}>
              <span>✓</span>

              <p>
                Your application can be saved and completed step by step.
              </p>
            </div>

            <button className={styles.contactButton}>
              CONTACT ADMISSIONS →
            </button>
          </aside>
        </div>
      </div>
    </section>
  );
}