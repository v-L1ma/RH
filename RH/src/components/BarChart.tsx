"use client"

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "../components/ui/chart"
const chartData = [
  { month: "January", Vagas: 186 },
  { month: "February", Vagas: 305 },
  { month: "March", Vagas: 237 },
  { month: "April", Vagas: 73 },
  { month: "May", Vagas: 209 },
  { month: "June", Vagas: 214 },
]

const chartConfig = {
  Vagas: {
    label: "Vagas",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig

export function BarChartComponent() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Vagas por mês</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="Vagas" fill="var(--color-Vagas)" radius={8} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
