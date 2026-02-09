import { privacyData } from "../data/privacyData";

export default function PrivacyPolicyPage() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-16">
      {/* Header */}
      <header className="mb-12">
        <h1 className="text-4xl font-semibold mb-3">
          Privacy Policy
        </h1>
        <p className="text-gray-600">
          Your privacy matters to us. This policy explains how we handle your data.
        </p>
      </header>

      {/* Content */}
      <div className="space-y-10">
        {privacyData.map((item) => (
          <div key={item.id}>
            <h2 className="text-xl font-medium mb-3">
              {item.id}. {item.heading}
            </h2>

            {item.heading === "Contact Us" ? (
              <PrivacyContactBlock />
            ) : (
              <p className="text-gray-700 whitespace-pre-line leading-relaxed">
                {item.description}
              </p>
            )}
          </div>
        ))}
      </div>

      {/* Footer */}
      <p className="mt-16 text-sm text-gray-500">
        Last Updated: {new Date().getFullYear()}
      </p>
    </section>
  );
}
function PrivacyContactBlock() {
  const phones = [
    "+265993857016",
    "+265992247334",
    "+265885320654"
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
