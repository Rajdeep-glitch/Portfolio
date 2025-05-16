"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const performanceMetrics = {
  lighthouse: {
    performance: 98,
    accessibility: 100,
    bestPractices: 95,
    seo: 100,
  },
  pagespeed: {
    fcp: "0.8s", // First Contentful Paint
    lcp: "1.2s", // Largest Contentful Paint
    cls: "0.01", // Cumulative Layout Shift
    tti: "1.5s", // Time to Interactive
  },
  accessibility: {
    contrast: "WCAG AAA",
    keyboardNavigation: "Fully Supported",
    screenReaders: "Optimized",
    ariaLabels: "Implemented",
  },
}

export default function PerformanceMetrics() {
  return (
    <section id="performance" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Performance & Accessibility</h2>
          <div className="h-1 w-20 bg-purple-500 mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Committed to building fast, accessible, and user-friendly applications
          </p>
        </motion.div>

        <Tabs defaultValue="lighthouse" className="space-y-6">
          <TabsList className="flex justify-center">
            <TabsTrigger value="lighthouse">Lighthouse Scores</TabsTrigger>
            <TabsTrigger value="pagespeed">Page Speed</TabsTrigger>
            <TabsTrigger value="accessibility">Accessibility</TabsTrigger>
          </TabsList>

          <TabsContent value="lighthouse" className="mt-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-medium mb-4">Performance</h3>
                    <div className="space-y-2">
                      <Progress value={performanceMetrics.lighthouse.performance} className="h-2" />
                      <p className="text-right text-sm">{performanceMetrics.lighthouse.performance}/100</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-medium mb-4">Accessibility</h3>
                    <div className="space-y-2">
                      <Progress value={performanceMetrics.lighthouse.accessibility} className="h-2" />
                      <p className="text-right text-sm">{performanceMetrics.lighthouse.accessibility}/100</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-medium mb-4">Best Practices</h3>
                    <div className="space-y-2">
                      <Progress value={performanceMetrics.lighthouse.bestPractices} className="h-2" />
                      <p className="text-right text-sm">{performanceMetrics.lighthouse.bestPractices}/100</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-medium mb-4">SEO</h3>
                    <div className="space-y-2">
                      <Progress value={performanceMetrics.lighthouse.seo} className="h-2" />
                      <p className="text-right text-sm">{performanceMetrics.lighthouse.seo}/100</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </TabsContent>

          <TabsContent value="pagespeed" className="mt-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-medium mb-2">First Contentful Paint</h3>
                    <p className="text-3xl font-bold text-purple-500">{performanceMetrics.pagespeed.fcp}</p>
                    <p className="text-sm text-muted-foreground mt-2">Time until first content appears</p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-medium mb-2">Largest Contentful Paint</h3>
                    <p className="text-3xl font-bold text-purple-500">{performanceMetrics.pagespeed.lcp}</p>
                    <p className="text-sm text-muted-foreground mt-2">Time until largest content appears</p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-medium mb-2">Cumulative Layout Shift</h3>
                    <p className="text-3xl font-bold text-purple-500">{performanceMetrics.pagespeed.cls}</p>
                    <p className="text-sm text-muted-foreground mt-2">Visual stability measure</p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-medium mb-2">Time to Interactive</h3>
                    <p className="text-3xl font-bold text-purple-500">{performanceMetrics.pagespeed.tti}</p>
                    <p className="text-sm text-muted-foreground mt-2">Time until fully interactive</p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </TabsContent>

          <TabsContent value="accessibility" className="mt-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-medium mb-2">Color Contrast</h3>
                    <p className="text-xl font-bold text-purple-500">{performanceMetrics.accessibility.contrast}</p>
                    <p className="text-sm text-muted-foreground mt-2">Highest accessibility standard</p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-medium mb-2">Keyboard Navigation</h3>
                    <p className="text-xl font-bold text-purple-500">
                      {performanceMetrics.accessibility.keyboardNavigation}
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">Navigate without mouse</p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-medium mb-2">Screen Readers</h3>
                    <p className="text-xl font-bold text-purple-500">
                      {performanceMetrics.accessibility.screenReaders}
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">Assistive technology support</p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-medium mb-2">ARIA Labels</h3>
                    <p className="text-xl font-bold text-purple-500">{performanceMetrics.accessibility.ariaLabels}</p>
                    <p className="text-sm text-muted-foreground mt-2">Proper element descriptions</p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
