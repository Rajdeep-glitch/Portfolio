"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <div className="h-1 w-20 bg-purple-500 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative h-80 w-80 mx-auto overflow-hidden rounded-xl border-4 border-purple-500/20">
              <Image src="/Rajdeep.jpg" alt="Rajdeep Roy" fill className="object-cover" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-6"
          >
            <Card>
              <CardContent className="p-6">
                <p className="text-lg">
                  I&apos;m a passionate problem-solver with a strong foundation in full-stack development, consistently
                  delivering innovative solutions to complex technical challenges. With leadership experience in
                  collaborative projects, I excel at guiding teams toward efficient outcomes while maintaining high code
                  quality standards. My dedication to continuous learning drives me to stay at the forefront of emerging
                  technologies in the ever-evolving landscape of web development.
                </p>
                <div className="mt-6 flex flex-wrap gap-4">
                  <Button asChild variant="outline" className="gap-2">
                    <a href="/resume.pdf" download>
                      <Download className="h-4 w-4" /> Download Resume
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="font-medium mb-2">Education</h3>
                <p className="text-muted-foreground">B.Tech in Computer Science</p>
              </div>
              <div>
                <h3 className="font-medium mb-2">Location</h3>
                <p className="text-muted-foreground">India</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
