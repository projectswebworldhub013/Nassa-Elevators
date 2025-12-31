import React from "react";

const COLORS = {
  brand: "#39B54A",        // Nassa Green
  brandDark: "#1F7A36",    // Deep Nassa Green
  brandSoft: "#8EE6A1",    // Soft Green
  brandHover: "#2FA84F",   // Emerald Green
  bgMain: "#FFFFFF",       // Pure White
  bgAlt: "#F7FAF8",        // Off White Green
  border: "#E3EFE7",       // Light Green Gray
  textPrimary: "#1F2933",  // Charcoal Black
  textSecondary: "#6B7280" // Soft Gray
};

const MapSection = () => {
  return (
    <section
      id="location"
      className="py-20 px-4 md:px-12 lg:px-24 bg-[#ffffff]"
    >
      {/* SECTION HEADER */}
      <div className="max-w-6xl mx-auto text-center mb-14">
        <h2
          className="text-3xl md:text-4xl font-bold mb-4"
          style={{ color: COLORS.brandDark }}
        >
          Visit NASSA Elevators
        </h2>

        <p
          className="max-w-2xl mx-auto text-sm md:text-base"
          style={{ color: COLORS.textSecondary }}
        >
          Experience premium elevator solutions, modernization services, and
          expert support at our Aligarh office. We welcome builders, architects,
          and property owners.
        </p>

        {/* DECORATIVE LINE */}
        <div className="mt-6 flex justify-center">
          <div
            className="h-[3px] w-24 rounded-full"
            style={{ backgroundColor: COLORS.brand }}
          />
        </div>
      </div>

      {/* MAP CARD */}
      <div className="max-w-6xl mx-auto">
        <div
          className="rounded-2xl overflow-hidden bg-white"
          style={{
            border: `1px solid ${COLORS.border}`,
            boxShadow: "0 14px 40px rgba(0,0,0,0.08)"
          }}
        >
          {/* LOCATION INFO */}
          <div
            className="p-6 border-b"
            style={{ borderColor: COLORS.border }}
          >
            <h3
              className="text-xl font-semibold"
              style={{ color: COLORS.textPrimary }}
            >
              NASSA Elevators – Aligarh
            </h3>

            <p
              className="mt-2 text-sm"
              style={{ color: COLORS.textSecondary }}
            >
              Leading elevator company in Aligarh offering installation,
              modernization, maintenance, and lift services at the best prices.
            </p>
          </div>

          {/* MAP */}
          <div className="h-[280px] md:h-[380px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d56404.31837377668!2d78.076557!3d27.92437!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3974a56687758745%3A0xd56d89a910258a4d!2sNassa%20Elevators%20%7C%20Best%20Elevators%20Company%20In%20Aligarh%20%7C%20Lift%20Boy%20In%20Aligarh%20%7C%20Lift%20Service%20Aligarh%20%7C%20Best%20Price%20Provide!5e0!3m2!1sen!2sus!4v1767117491667!5m2!1sen!2sus"
              width="100%"
              height="100%"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              className="border-0 w-full h-full"
              title="NASSA Elevators Aligarh Location"
            />
          </div>
        </div>
      </div>

      {/* FOOT NOTE */}
      <div className="max-w-5xl mx-auto mt-14 text-center">
        <p
          className="text-sm md:text-base"
          style={{ color: COLORS.textSecondary }}
        >
          <strong style={{ color: COLORS.textPrimary }}>
            Office Hours:
          </strong>{" "}
          Monday – Saturday | 9:00 AM – 7:00 PM
        </p>
      </div>
    </section>
  );
};

export default MapSection;
