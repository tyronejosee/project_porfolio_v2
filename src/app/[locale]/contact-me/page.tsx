import { ContactForm, Header } from "@/components";

export default function ContactPage() {
  return (
    <main className="max-w-screen-xl mx-auto my-16 px-4 xl:px-0">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <section className="pb-8 w-full">
          <Header
            title="Contact Form"
            subtitle="Lorem ipsum"
          />
          <ContactForm />
        </section>
        <section className="hidden md:block overflow-hidden rounded-xl py-4">
          {/* <Image
            src="/images/apply-background.webp"
            alt="Apply Background"
            width={1080}
            height={1080}
            className="object-cover w-full h-full"
          /> */}
        </section>
      </div>
    </main>
  );
}
