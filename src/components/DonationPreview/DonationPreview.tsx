"use client";

import { useState } from "react";
import styles from "./DonationPreview.module.css";

const causes = [
  {
    icon: "🎓",
    title: "Student Bursaries",
    description: "Support deserving students",
  },
  {
    icon: "📚",
    title: "Learning Resources",
    description: "Books and digital learning",
  },
  {
    icon: "🏗️",
    title: "Infrastructure",
    description: "Build better facilities",
  },
  {
    icon: "♡",
    title: "Other Needs",
    description: "Support priority needs",
  },
];

const amounts = [
  { label: "KSh 1,000", value: 1000 },
  { label: "KSh 2,500", value: 2500 },
  { label: "KSh 5,000", value: 5000 },
];

export default function DonationPreview() {
  const [selectedCause, setSelectedCause] = useState(causes[0].title);
  const [selectedAmount, setSelectedAmount] = useState<number>(5000);
  const [customAmount, setCustomAmount] = useState("");
  const [showPayment, setShowPayment] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [paymentState, setPaymentState] = useState<
    "idle" | "processing" | "success"
  >("idle");

  const finalAmount =
    customAmount.trim() !== ""
      ? Number(customAmount.replace(/,/g, ""))
      : selectedAmount;

  const handleDonate = () => {
    setShowPayment(true);
    setPaymentState("idle");
  };

  const handleMpesaPayment = () => {
    if (phoneNumber.trim().length < 9) {
      return;
    }

    setPaymentState("processing");

    // Demo simulation
    setTimeout(() => {
      setPaymentState("success");
    }, 1800);
  };

  const formatAmount = (amount: number) => {
    return new Intl.NumberFormat("en-KE").format(amount || 0);
  };

  return (
    <section className={styles.preview}>
      {/* Header */}
      <div className={styles.header}>
        <div>
          <span className={styles.eyebrow}>GIVE BACK</span>

          <h2>Make a Difference</h2>

          <p>
            Support the future of St. Martin Mwibale students through a secure
            contribution.
          </p>
        </div>

        <div className={styles.secureBadge}>
          <span>🔒</span>
          Secure Giving
        </div>
      </div>

      {!showPayment ? (
        <div className={styles.content}>
          {/* Causes */}
          <div className={styles.section}>
            <div className={styles.sectionHeading}>
              <div>
                <span className={styles.step}>01</span>
                <p className={styles.label}>Choose a Cause</p>
              </div>

              <span className={styles.selectionHint}>
                {selectedCause}
              </span>
            </div>

            <div className={styles.causes}>
              {causes.map((cause) => {
                const isActive = selectedCause === cause.title;

                return (
                  <button
                    key={cause.title}
                    className={`${styles.causeCard} ${
                      isActive ? styles.activeCause : ""
                    }`}
                    type="button"
                    onClick={() => setSelectedCause(cause.title)}
                  >
                    {isActive && (
                      <span className={styles.selectedCheck}>✓</span>
                    )}

                    <span className={styles.causeIcon}>{cause.icon}</span>

                    <span className={styles.causeTitle}>
                      {cause.title}
                    </span>

                    <span className={styles.causeDescription}>
                      {cause.description}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Amount */}
          <div className={styles.section}>
            <div className={styles.sectionHeading}>
              <div>
                <span className={styles.step}>02</span>
                <p className={styles.label}>Select Your Contribution</p>
              </div>
            </div>

            <div className={styles.amounts}>
              {amounts.map((amount) => {
                const isActive =
                  selectedAmount === amount.value &&
                  customAmount === "";

                return (
                  <button
                    key={amount.value}
                    className={`${styles.amountButton} ${
                      isActive ? styles.activeAmount : ""
                    }`}
                    type="button"
                    onClick={() => {
                      setSelectedAmount(amount.value);
                      setCustomAmount("");
                    }}
                  >
                    {isActive && <span>✓</span>}
                    {amount.label}
                  </button>
                );
              })}

              <button
                className={`${styles.amountButton} ${
                  customAmount !== "" ? styles.activeAmount : ""
                }`}
                type="button"
                onClick={() => setCustomAmount("1")}
              >
                Other Amount
              </button>
            </div>

            {customAmount !== "" && (
              <div className={styles.customAmountWrap}>
                <span>KSh</span>

                <input
                  type="number"
                  value={customAmount}
                  placeholder="Enter amount"
                  onChange={(event) =>
                    setCustomAmount(event.target.value)
                  }
                  autoFocus
                />
              </div>
            )}
          </div>

          {/* Donation Summary */}
          <div className={styles.donationSummary}>
            <div>
              <span>Supporting</span>
              <strong>{selectedCause}</strong>
            </div>

            <div className={styles.summaryAmount}>
              <span>Your Contribution</span>
              <strong>KSh {formatAmount(finalAmount)}</strong>
            </div>
          </div>

          {/* CTA */}
          <button
            className={styles.donateButton}
            type="button"
            onClick={handleDonate}
            disabled={!finalAmount || finalAmount <= 0}
          >
            <span>Proceed to Donate</span>
            <span className={styles.arrow}>→</span>
          </button>

          <div className={styles.security}>
            <span>🔒</span>
            <span>Your donation is secure and confidential.</span>
          </div>
        </div>
      ) : (
        <div className={styles.paymentPanel}>
          {paymentState === "success" ? (
            <div className={styles.successState}>
              <div className={styles.successIcon}>✓</div>

              <span className={styles.successEyebrow}>
                PAYMENT INITIATED
              </span>

              <h3>Thank You for Giving!</h3>

              <p>
                Your M-Pesa payment request has been successfully initiated.
              </p>

              <div className={styles.receipt}>
                <div>
                  <span>Cause</span>
                  <strong>{selectedCause}</strong>
                </div>

                <div>
                  <span>Amount</span>
                  <strong>
                    KSh {formatAmount(finalAmount)}
                  </strong>
                </div>

                <div>
                  <span>Payment Method</span>
                  <strong>M-Pesa</strong>
                </div>
              </div>

              <button
                className={styles.backButton}
                onClick={() => {
                  setShowPayment(false);
                  setPaymentState("idle");
                  setPhoneNumber("");
                }}
              >
                Make Another Donation
              </button>
            </div>
          ) : (
            <>
              <button
                className={styles.backLink}
                onClick={() => setShowPayment(false)}
              >
                ← Back to donation
              </button>

              <div className={styles.paymentHeader}>
                <div className={styles.mpesaLogo}>
                  <span>M</span>
                </div>

                <div>
                  <span className={styles.eyebrow}>
                    LIPA NA M-PESA
                  </span>

                  <h3>Complete Your Donation</h3>

                  <p>
                    Enter your M-Pesa number to receive an STK Push.
                  </p>
                </div>
              </div>

              <div className={styles.paymentAmount}>
                <span>You are donating</span>

                <strong>
                  KSh {formatAmount(finalAmount)}
                </strong>

                <small>to {selectedCause}</small>
              </div>

              <div className={styles.phoneInputGroup}>
                <label htmlFor="mpesa-phone">
                  M-Pesa Phone Number
                </label>

                <div className={styles.phoneInput}>
                  <span>🇰🇪 +254</span>

                  <input
                    id="mpesa-phone"
                    type="tel"
                    placeholder="712 345 678"
                    value={phoneNumber}
                    onChange={(event) =>
                      setPhoneNumber(event.target.value)
                    }
                  />
                </div>
              </div>

              <button
                className={styles.mpesaButton}
                onClick={handleMpesaPayment}
                disabled={
                  paymentState === "processing" ||
                  phoneNumber.trim().length < 9
                }
              >
                {paymentState === "processing" ? (
                  <>
                    <span className={styles.spinner}></span>
                    Sending STK Push...
                  </>
                ) : (
                  <>
                    <span>📱</span>
                    Send M-Pesa STK Push
                  </>
                )}
              </button>

              <div className={styles.paymentNote}>
                <span>🔒</span>

                <p>
                  This is a secure donation preview. Payment integration will
                  connect to Safaricom M-Pesa.
                </p>
              </div>
            </>
          )}
        </div>
      )}
    </section>
  );
}