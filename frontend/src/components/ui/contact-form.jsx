import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  name: z.string().min(2, { message: "O nome deve ter pelo menos 2 caracteres." }),
  phone: z.string().min(10, { message: "Informe um telefone válido." }),
  email: z.string().email({ message: "Informe um email válido." }),
  message: z.string().min(10, { message: "A mensagem deve ter pelo menos 10 caracteres." }),
});

export function ContactForm() {
  const [step, setStep] = useState(1);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (values) => {
    console.log("Form values:", values);
    alert("Mensagem enviada com sucesso!");
    form.reset();
    setStep(1);
  };

  const nextStep = async () => {
    const fields = step === 1 ? ["name", "phone"] : ["email", "message"];
    const isValid = await form.trigger(fields);
    if (isValid) {
      if (step === 1) setStep(2);
    }
  };

  const prevStep = () => {
    if (step === 2) setStep(1);
  };

  return (
    <div className="w-full max-w-[488px] flex flex-col gap-4">
      {/* Step Tabs - Figma Style */}
      <div className="bg-[#f1f5f9] p-1 flex w-full">
        <button
          type="button"
          onClick={() => step === 2 && prevStep()}
          className={cn(
            "flex-1 py-1.5 px-3 text-[14px] font-medium transition-all",
            step === 1 
              ? "bg-white text-secondary shadow-[0px_1px_1px_rgba(0,0,0,0.05)]" 
              : "text-muted-foreground hover:bg-white/50"
          )}
        >
          Etapa 1
        </button>
        <button
          type="button"
          onClick={() => step === 1 && nextStep()}
          className={cn(
            "flex-1 py-1.5 px-3 text-[14px] font-medium transition-all",
            step === 2 
              ? "bg-white text-secondary shadow-[0px_1px_1px_rgba(0,0,0,0.05)]" 
              : "text-muted-foreground hover:bg-white/50"
          )}
        >
          Etapa 2
        </button>
      </div>

      <div className="bg-white border border-[#e2e8f0] shadow-sm overflow-hidden">
        <div className="p-6 pb-0">
          <div className="mb-6 space-y-2">
            <h3 className="text-[36px] font-semibold tracking-tight leading-tight text-[#09090b]">
              Ou, se preferir, <span className="text-secondary">envie uma mensagem</span>
            </h3>
            <p className="text-[14px] text-zinc-500 leading-normal">
              Preencha o formulário abaixo com suas informações. Nossa equipe retornará o contato para entender melhor sua situação.
            </p>
          </div>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 p-6 pt-0">
            {step === 1 && (
              <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-secondary font-medium">Nome completo:</FormLabel>
                      <FormControl>
                        <Input placeholder="Pedro Duarte" {...field} className="rounded-none border-[#e2e8f0] h-[44px]" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-secondary font-medium">Telefone:</FormLabel>
                      <FormControl>
                        <Input placeholder="(DD) 9 XXXX-XXXX" {...field} className="rounded-none border-[#e2e8f0] h-[44px]" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="pt-2">
                  <Button 
                    type="button" 
                    onClick={nextStep}
                    className="w-full bg-secondary hover:bg-secondary/90 text-white h-[48px] rounded-none font-medium flex items-center justify-center gap-2"
                  >
                    Próximo
                    <ArrowUpRight className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-secondary font-medium">Email:</FormLabel>
                      <FormControl>
                        <Input placeholder="contato@email.com" {...field} className="rounded-none border-[#e2e8f0] h-[44px]" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-secondary font-medium">Mensagem:</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Descreva sua mensagem aqui..." 
                          className="min-h-[120px] rounded-none border-[#e2e8f0]"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex flex-col gap-4 pt-2">
                  <Button 
                    type="submit" 
                    className="w-full bg-secondary hover:bg-secondary/90 text-white h-[56px] rounded-none font-medium flex items-center justify-center gap-2"
                  >
                    Enviar formulário
                    <ArrowUpRight className="w-5 h-5" />
                  </Button>
                  <button
                    type="button"
                    onClick={prevStep}
                    className="text-sm text-muted hover:text-secondary transition-colors underline-offset-4 hover:underline"
                  >
                    Voltar para etapa anterior
                  </button>
                </div>
              </div>
            )}
          </form>
        </Form>
      </div>
    </div>
  );
}
