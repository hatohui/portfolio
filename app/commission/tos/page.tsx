"use client";
import Link from "next/link";
import React from "react";

const TOS = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen p-6">
      <div className="w-full max-w-3xl border thin-scrollbar border-gray-300 p-6 rounded-md shadow-lg overflow-auto h-[80vh] relative">
        {/* Return Button (Arrow) */}
        <Link
          href="/commission"
          className="absolute top-3 left-3 w-8 h-8 flex items-center justify-center rounded-full hover:text-slate-900 hover:bg-gray-300 transition"
          aria-label="Return"
        >
          {/* Arrow SVG */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </Link>

        <h3 className="text-2xl font-bold text-center mb-4">
          Terms of Service
        </h3>

        {/* PAYMENT */}
        <section className="mb-6">
          <h4 className="text-xl font-semibold"> PAYMENT </h4>
          <ul className="list-disc pl-5">
            <li>
              Payments are accepted via <strong>PayPal only</strong>.
            </li>
            <li>
              <strong>Full upfront payment</strong> is required before I start.
            </li>
            <li>
              All payments are <strong>non-refundable</strong> once received.
            </li>
            <li>
              Prices are <strong>fixed</strong> and non-negotiable.
            </li>
          </ul>
        </section>

        {/* PROCESS */}
        <section className="mb-6">
          <h4 className="text-xl font-semibold"> PROCESS </h4>
          <ul className="list-disc pl-5">
            <li>
              Contact me via{" "}
              <strong>Twitter, Telegram, or Discord (@hatohui)</strong>.
            </li>
            <li>
              We will discuss the details to ensure clarity before proceeding.
            </li>
            <li>
              Once it&#39;s your turn in the queue, I will notify you and
              request payment.
            </li>
            <li>
              After receiving payment, I will provide a{" "}
              <strong>WIP sketch</strong> for your review.
            </li>
            <li>
              You can request <strong>multiple changes</strong> during the
              sketch phase.
            </li>
            <li>
              Once the sketch is confirmed, I will proceed with rendering.
            </li>
            <li>
              The final delivery time is usually{" "}
              <strong>within 2 months</strong>.
            </li>
            <li>
              After the final rendering, only <strong>minor adjustments</strong>{" "}
              (such as color tweaks) will be allowed.
            </li>
          </ul>
        </section>

        {/* COMMISSIONERS' RESPONSIBILITIES */}
        <section className="mb-6">
          <h4 className="text-xl font-semibold">
            {" "}
            COMMISSIONER&#39;S RESPONSIBILITIES{" "}
          </h4>
          <ul className="list-disc pl-5">
            <li>
              <strong>SFW or NSFW references</strong> are both acceptable.
            </li>
            <li>
              If possible, provide{" "}
              <strong>pose references or descriptions</strong>.
            </li>
            <li>For deadlines, please discuss with me in advance.</li>
            <li>
              If you want the commission to remain <strong>private</strong>, let
              me know beforehand.
            </li>
          </ul>
        </section>

        {/* REVISIONS & ADDITIONAL FEES */}
        <section className="mb-6">
          <h4 className="text-xl font-semibold">
            {" "}
            REVISIONS & ADDITIONAL FEES{" "}
          </h4>
          <ul className="list-disc pl-5">
            <li>
              <strong>Minor changes</strong> are free during the WIP phase.
            </li>
            <li>
              <strong>Major changes</strong> after sketch approval will require
              an additional fee.
            </li>
            <li>
              Rush commissions or urgent requests may have a{" "}
              <strong>priority fee</strong>.
            </li>
            <li>
              Any missing details (if initially stated) will be added{" "}
              <strong>for free</strong>.
            </li>
          </ul>
        </section>

        {/* USAGE RIGHTS */}
        <section className="mb-6">
          <h4 className="text-xl font-semibold"> USAGE RIGHTS </h4>
          <ul className="list-disc pl-5">
            <li>
              I reserve the right to <strong>decline any commission</strong> at
              my discretion.
            </li>
            <li>
              My artwork <strong>cannot be used for commercial purposes</strong>{" "}
              without prior agreement.
            </li>
            <li>
              Commissioners are required to <strong>credit me</strong> when
              sharing my work.
            </li>
            <li>
              <strong>AI training, NFT usage, or resale</strong> of my work is
              strictly prohibited.
            </li>
          </ul>
        </section>

        {/* ADDITIONAL NOTES */}
        <section className="mb-6">
          <h4 className="text-xl font-semibold"> ADDITIONAL NOTES </h4>
          <ul className="list-disc pl-5">
            <li>
              Commissions are <strong>not first-come, first-serve</strong> – I
              will select based on availability.
            </li>
            <li>Delays may occur due to college or real-life obligations.</li>
            <li>
              By default, I reserve the right to{" "}
              <strong>share my work publicly</strong> unless a private request
              is made.
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default TOS;
