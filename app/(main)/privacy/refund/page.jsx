import React from "react";

const Refund = () => {
  return (
    <div className="px-[8vw] py-[2vw]">
      <h1 className="text-3xl font-bold text-websiteBlue mb-4">
        Rescheduling, Refund & Cancellation Policy
      </h1>
  
      <ol className="list-decimal pl-10">
        <li className="mb-6">
          A minimum of 24 hours&apos; notice is required for rescheduling or
          cancellation of an appointment. Without such notification, fees will
          be charged to the clients as follows:
          <ul className="list-disc pl-4">
            <li>
              Concellations within 24 hours of the appointment: 100% of the fee
              payable for the session.
            </li>
            <li>
              No-shows (missed appointment without notification): 100% of the
              fee payable for the session.
            </li>
            <li>
              The Client may avoid a cancellation or no-show fee if the Parties
              are able to reschedule within the same week as dictated by the
              therapist schedule and availability.
            </li>
          </ul>
        </li>
        <li className="mb-6">
          In case of concellation by the therapist, or in the event, the
          therapist with whom client has booked a paid session via the
          consciousleap platform, has not been able to meet the client, the
          client will need to write to us at therapy@consciousleap.co within
          five (5) days from the occurrence of such an event; in which case,
          100% fee paid for the session shall be refunded to the client within
          the next six (6) business days in the original mode of payment done by
          the client while booking, or alternatively, the therapist shall adjust
          the fee paid towards a rescheduled session, as agreed to between the
          parties.
        </li>
        <li className="mb-6">
          To cancel or reschedule a session the client shall do so by logging
          into the consciousleap platform and/or write an email at
          (hello@consciousleap.co), any notification or communication beyond
          office hours 10 om to 6 pm) shall be treated to be mode the subsequent
          day.
        </li>
        <li className="mb-6">
          clients will not be entitled to any refunds in cases where, the
          therapist is unable to meet the client at the exact time of the
          scheduled oppointment time and the client is required to woit,
          irrespective of the fact whether the client is required to wait or
          choose to not obtain the medical consciousleap platform from the said
          therapist
        </li>
      </ol>
    </div>
  );
};

export default Refund;
