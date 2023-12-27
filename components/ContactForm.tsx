"use client";

import React, { FormEvent, useState } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { useToast } from "./ui/use-toast";

export const ContactForm = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState<string[]>([]);
  const { toast } = useToast();

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    try {
      const res = await fetch("api/contact", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          fullname,
          email,
          message,
        }),
      });

      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }

      const { msg } = await res.json();
      setError(msg);
    } catch (error) {
      console.error("Error:", error);
      setError(["An error occurred while processing the request."]);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="py-4 mt-4  flex flex-col gap-4">
        <div className="text-white">
          <Label htmlFor="fullname">Full name</Label>
          <Input
            onChange={(e) => setFullname(e.target.value)}
            value={fullname}
            type="text"
            placeholder="John  doe"
            className="bg-transparent"
          />
        </div>
        <div className="text-white">
          <Label htmlFor="Email">Email</Label>
          <Input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            placeholder="John@gmail.com"
            className="bg-transparent"
          />
        </div>
        <div className="text-white">
          <Label htmlFor="message">Your message</Label>
          <Textarea
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            placeholder="Type your message here."
            className="bg-transparent"
          />
        </div>
        <Button
          variant="outline"
          onClick={() => {
            toast({
              description: "Your message has been sent.",
            });
          }}
        >
          Send message
        </Button>
      </form>
    </>
  );
};
