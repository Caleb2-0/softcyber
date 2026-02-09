import { termsData } from "../data/termsData";

export default function TermsPage() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-16">
      {/* Header */}
      <header className="mb-12">
        <h1 className="text-4xl font-semibold mb-3">
          Terms & Conditions
        </h1>
        <p className="text-gray-600">
          Please read these terms carefully before using our services.
        </p>
      </header>

      {/* Terms Content */}
      <div className="space-y-10">
        {termsData.map((term) => (
          <div key={term.id}>
            <h2 className="text-xl font-medium mb-3">
              {term.id}. {term.heading}
            </h2>

            {term.heading === "Contact Information" ? (
              <ContactBlock />
            ) : (
              <p className="text-gray-700 whitespace-pre-line leading-relaxed">
                {term.description}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}


function ContactBlock() {
  const phones = [
    "+265993857016",
    "+265881861226",
    "+265992247334",
    "+265885320654",
  ];

  return (
    <div className="space-y-2 text-gray-700">
      <p className="font-medium">SoftCyber Technologies</p>
      <p>Lilongwe, Malawi</p>

      <p>
        Email:{" "}
        <a
          href="mailto:softcyber606@gmail.com"
          className="text-blue-600 hover:underline"
        >
          softcyber606@gmail.com
        </a>
      </p>

      <div>
        <p className="font-medium">Phone:</p>
        <ul className="ml-4 list-disc">
          {phones.map((phone) => (
            <li key={phone}>
              <a
                href={`tel:${phone}`}
                className="text-blue-600 hover:underline"
              >
                {phone.replace("+265", "0")}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

