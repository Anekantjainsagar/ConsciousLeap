import React from "react";

const Shipping = () => {
  return (
    <div className="px-5 md:px-[2vw] md:py-[1vw] py-[2vw]">
      <p className="font-bold text-websiteBlue text-3xl">Shipping Policy</p>
      <div className="px-2 md:px-4 mt-5">
        <p>
          Thank you for visiting and shopping at Conscious Store. Following are
          the terms and conditions that constitute our Shipping Policy.
        </p>
        <p className="underline font-bold mt-2">STANDARD SHIPPING POLICY</p>
        <ul className="list-disc ml-5 mt-1">
          <li>
            We currently deliver across India to all metros and certain
            non-metro cities.
          </li>
          <li>
            We have tied up with a reliable logistics partner that ensures
            reliable delivery of non-perishable items across cities. For
            perishable goods, we have a dedicated logistics team that will pick
            up your products from the vendor and hand-deliver it to you (This
            service is currently available only in select cities for select
            products).
          </li>
          <li>
            We try our very best to ensure that there are no delays in
            shipments, but sometimes it&apos;s beyond our control.
          </li>
        </ul>
        <p className="underline font-bold mt-2">SHIPPING TIME</p>
        <ul className="list-disc ml-5 mt-1">
          <li>
            Since most of the products are made to order, we allow the vendors
            to decide on the lead time they require. This time is indicated
            alongside each product and reflected on the checkout page. Typically
            the lead time is 5-7 working days.
          </li>
          <li>
            The logistics partner gets a notification once the vendor has your
            product ready for dispatch. They will then pick it up from the
            vendor and deliver it to you between 8 am to 9 pm on all business
            days between Monday to Saturday.
          </li>
          <li>
            We ship on all days (Monday to Saturday) except Sundays and public
            holidays.
          </li>
          <li>
            If you feel that the packaging of the product is tampered with or
            damaged at the time of delivery, please refuse to accept delivery of
            the product and contact us immediately at support@consciousleap.co
            mentioning your order reference number and a picture of the tampered
            package. We shall ensure a replacement delivery is made to you at
            the earliest.
          </li>
          <li>
            In case your shipment is delayed:
            <ul className="ml-5 mt-1 list-disc">
              <li>
                In case there is a delay, please send us an email at
                support@consciousleap.co with your order number.
              </li>
              <li>
                In the unfortunate scenario that your shipment has been
                misplaced or lost en route, we can either resend the order to
                you (if the same products are still in stock), issue a credit
                note to you, or reimburse the amount completely to you. In such
                a case, we would request you to confirm in writing to us that
                you have not received the product. However, consciousleaps
                decision in this regard shall be final and binding to you and
                you shall not be entitled to raise any claims in that regard.{" "}
              </li>
            </ul>
          </li>
        </ul>
        <p className="underline font-bold mt-2">SHIPMENT PROCESSING TIME</p>
        <ul className="list-disc ml-5 mt-1">
          <li>
            All orders are processed within 2-3 business days. You can expect
            delivery of the products within 5-7 business days of placing your
            order. Orders are not shipped or delivered on weekends or holidays.
          </li>
          <li>
            If we are experiencing a high volume of orders, shipments may be
            delayed by a few days. Please allow additional days in transit for
            delivery. If there will be a significant delay in the shipment of
            your order, we will contact you via email or telephone.
          </li>
        </ul>
        <p className="underline font-bold mt-2">CASH ON DELIVERY CHARGES</p>
        <ul className="list-disc ml-5 mt-1">
          <li>
            The Cash on Delivery option is available in limited cities in India.
            Regular Shipping
          </li>
        </ul>
        <p className="underline font-bold mt-2">
          SHIPMENT CONFIRMATION & ORDER TRACKING
        </p>
        <ul className="list-disc ml-5 mt-1">
          <li>
            You will receive a Shipment Confirmation email once your order has
            shipped containing your tracking number(s). The tracking number will
            be active from the date of dispatch up to 7 days after delivery.
          </li>
          <li>
            <b>Customs, Duties and Taxes-</b> consciousleap is not responsible
            for any customs and taxes applied to your order. All fees imposed
            during or after shipping are the responsibility of the customer
            (tariffs, taxes, etc.).
          </li>
          <li>
            <b>Damages-</b> consciousleap is not liable for any products damaged
            or lost during shipping. If you received your order damaged, please
            contact the shipment carrier to file a claim or reach out to our
            customer support to file such claims. Please save all packaging
            materials and damaged goods before filing a claim including pictures
            and videos of the damaged products. This is required to file a claim
            for lost/damaged products during shipping.
          </li>
        </ul>
        <p className="underline font-bold mt-2">
          INTERNATIONAL SHIPPING POLICY
        </p>
        <ul className="list-disc ml-5 mt-1">
          <li>We currently do not ship outside India.</li>
        </ul>
        <p className="underline font-bold mt-2">RETURNS POLICY</p>
        <ul className="list-disc ml-5 mt-1">
          <li>
            Our Return & Refund Policy provides detailed information about
            options and procedures for returning your order.​
            </li>
        </ul>
      </div>
    </div>
  );
};

export default Shipping;
