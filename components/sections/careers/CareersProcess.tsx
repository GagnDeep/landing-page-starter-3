import { careersContent } from "@/content/careers";
import { StepDiagram } from "@/components/visuals/StepDiagram";

export function CareersProcess() {
  // Convert the string array into the Step format expected by StepDiagram
  const steps = careersContent.applicationProcess.steps.map((step) => {
    // Basic regex or logic to split the step string if it's "1. Title. Description"
    // Since the content file has strings like "1. Submit your resume and a brief cover letter.",
    // we'll use a simple parser or just pass the whole string.
    const parts = step.split(". ");
    const title = parts[0] + (parts.length > 1 ? "." : "");
    const description = parts.length > 1 ? parts.slice(1).join(". ") : step;

    // For better UI, we'll just extract the text after the number as the title,
    // or use the whole string if it's not structured that way.
    const cleanTitle = step.replace(/^\d+\.\s*/, '');

    return {
      title: cleanTitle,
      description: "" // we can leave description empty or parse it out
    };
  });

  return (
    <section className="py-24 bg-muted/5">
      <div className="container mx-auto px-4 md:px-8 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            {careersContent.applicationProcess.title}
          </h2>
        </div>

        <StepDiagram steps={steps} className="mt-8" />
      </div>
    </section>
  );
}
