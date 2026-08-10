"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { HugeiconsIcon } from "@hugeicons/react"
import { CheckmarkBadge01Icon, Alert01Icon, File01Icon, PrinterIcon } from "@hugeicons/core-free-icons"
import { cn } from "@/lib/utils"

type QuestionId = 'citizenship' | 'priorPassport' | 'renunciation' | 'route' | 'nameChange';

interface Question {
  id: QuestionId;
  label: string;
  options: { value: string; label: string }[];
}

const questions: Question[] = [
  {
    id: 'citizenship',
    label: 'What is your current citizenship?',
    options: [
      { value: 'british', label: 'British' },
      { value: 'other', label: 'Other Foreign Nationality' }
    ]
  },
  {
    id: 'priorPassport',
    label: 'Did you previously hold an Indian Passport?',
    options: [
      { value: 'yes', label: 'Yes' },
      { value: 'no', label: 'No' }
    ]
  },
  {
    id: 'renunciation',
    label: 'Do you have a Surrender / Renunciation Certificate?',
    options: [
      { value: 'yes', label: 'Yes, I have it' },
      { value: 'no', label: 'No, I need to apply for one' },
      { value: 'na', label: 'Not Applicable' }
    ]
  },
  {
    id: 'route',
    label: 'On what basis are you applying?',
    options: [
      { value: 'self', label: 'Self (Former Indian National)' },
      { value: 'spouse', label: 'Foreign Spouse of Indian Citizen / OCI' },
      { value: 'minor', label: 'Minor Child of Indian Citizen / OCI' }
    ]
  },
  {
    id: 'nameChange',
    label: 'Has your name changed since your Indian Passport was issued?',
    options: [
      { value: 'yes', label: 'Yes (e.g., Marriage, Deed Poll)' },
      { value: 'no', label: 'No' }
    ]
  }
];

export function OciReadinessChecker() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Partial<Record<QuestionId, string>>>({});
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (value: string) => {
    const questionId = questions[currentStep].id;
    setAnswers(prev => ({ ...prev, [questionId]: value }));
  };

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      setShowResults(true);
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setAnswers({});
    setShowResults(false);
  };

  const handlePrint = () => {
    window.print();
  }

  const renderResults = () => {
    return (
      <div className="space-y-6">
        <div className="bg-primary/10 border border-primary/20 rounded-lg p-6">
          <h3 className="font-heading text-lg font-bold flex items-center gap-2 mb-2">
            <HugeiconsIcon icon={File01Icon} className="text-primary" strokeWidth={2} />
            Your Required Document Pack
          </h3>
          <p className="text-sm text-muted-foreground">
            Based on your answers, here is the exact paperwork you need. We&apos;ve highlighted the common failure modes.
          </p>
        </div>

        <div className="space-y-4">
          <DocumentItem
            title="Current British Passport"
            status="ready"
            note="Ensure it is valid for at least 6 months from submission date."
          />

          {answers.priorPassport === 'yes' && answers.renunciation === 'yes' && (
            <DocumentItem
              title="Surrender Certificate"
              status="ready"
              note="Must be the original, not a photocopy. Name must match exactly."
            />
          )}

          {answers.priorPassport === 'yes' && answers.renunciation === 'no' && (
            <DocumentItem
              title="Surrender Certificate"
              status="missing"
              note="CRITICAL: You cannot apply for OCI without this. You must surrender your Indian passport first."
            />
          )}

          {answers.route === 'spouse' && (
            <DocumentItem
              title="Marriage Certificate"
              status="risky"
              note="If married outside the UK, the certificate must be Apostilled. A standard translation is not enough."
            />
          )}

          {answers.nameChange === 'yes' && (
            <DocumentItem
              title="Deed Poll / Name Change Proof"
              status="risky"
              note="Must be an official enrolled deed poll or marriage certificate. An unenrolled deed poll is often rejected."
            />
          )}
        </div>

        <div className="flex gap-4 pt-4 border-t print:hidden">
          <Button onClick={handlePrint} variant="outline" className="flex-1 gap-2">
            <HugeiconsIcon icon={PrinterIcon} className="size-4" strokeWidth={2} />
            Print Checklist
          </Button>
          <Button onClick={handleReset} variant="secondary" className="flex-1">
            Start Over
          </Button>
        </div>
      </div>
    );
  };

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-md border-border/50">
      <CardHeader className="bg-muted/30 border-b">
        <CardTitle className="font-heading text-2xl">OCI Readiness Checker</CardTitle>
        <CardDescription>
          Find out exactly what documents you need and what normally causes rejections.
        </CardDescription>
      </CardHeader>
      <CardContent className="p-6">
        {showResults ? (
          renderResults()
        ) : (
          <div className="space-y-6">
            <div className="flex justify-between text-xs font-medium text-muted-foreground mb-2">
              <span>Question {currentStep + 1} of {questions.length}</span>
              <span>{Math.round(((currentStep + 1) / questions.length) * 100)}% Complete</span>
            </div>
            <div className="h-2 w-full bg-muted rounded-full overflow-hidden mb-6">
              <div
                className="h-full bg-primary transition-all duration-300 ease-in-out"
                style={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
              />
            </div>

            <h3 className="text-xl font-medium mb-4">{questions[currentStep].label}</h3>

            <RadioGroup
              value={answers[questions[currentStep].id] || ""}
              onValueChange={handleAnswer}
              className="space-y-3"
            >
              {questions[currentStep].options.map((option) => (
                <div key={option.value} className="flex items-center space-x-2 border rounded-md p-4 transition-colors hover:bg-muted/50 cursor-pointer has-[:checked]:bg-primary/5 has-[:checked]:border-primary/50">
                  <RadioGroupItem value={option.value} id={option.value} />
                  <Label htmlFor={option.value} className="flex-1 cursor-pointer font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    {option.label}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        )}
      </CardContent>
      {!showResults && (
        <CardFooter className="flex justify-between border-t p-6 bg-muted/10">
          <Button
            variant="ghost"
            onClick={() => setCurrentStep(prev => Math.max(0, prev - 1))}
            disabled={currentStep === 0}
          >
            Back
          </Button>
          <Button
            onClick={handleNext}
            disabled={!answers[questions[currentStep].id]}
          >
            {currentStep === questions.length - 1 ? "See Results" : "Next Step"}
          </Button>
        </CardFooter>
      )}
    </Card>
  )
}

function DocumentItem({ title, status, note }: { title: string, status: 'ready' | 'missing' | 'risky', note: string }) {
  return (
    <div className={cn(
      "flex gap-4 p-4 border rounded-lg",
      status === 'ready' && "bg-green-50/50 border-green-200 dark:bg-green-950/20 dark:border-green-900",
      status === 'missing' && "bg-destructive/10 border-destructive/20",
      status === 'risky' && "bg-amber-50/50 border-amber-200 dark:bg-amber-950/20 dark:border-amber-900"
    )}>
      <div className="shrink-0 mt-0.5">
        {status === 'ready' && <HugeiconsIcon icon={CheckmarkBadge01Icon} className="text-green-600 dark:text-green-500" strokeWidth={2} />}
        {status === 'missing' && <HugeiconsIcon icon={Alert01Icon} className="text-destructive" strokeWidth={2} />}
        {status === 'risky' && <HugeiconsIcon icon={Alert01Icon} className="text-amber-600 dark:text-amber-500" strokeWidth={2} />}
      </div>
      <div>
        <h4 className="font-medium text-foreground">{title}</h4>
        <div className="text-sm mt-1">
          <span className={cn(
            "inline-block font-mono text-xs font-semibold px-1.5 py-0.5 rounded mr-2",
            status === 'ready' && "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300",
            status === 'missing' && "bg-destructive/20 text-destructive",
            status === 'risky' && "bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-300"
          )}>
            {status.toUpperCase()}
          </span>
          <span className="text-muted-foreground">{note}</span>
        </div>
      </div>
    </div>
  )
}
