"use client"

import * as React from "react"
import { Label, Pie, PieChart } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "./ui/chart"
const chartData = [
  { browser: "Marketing", vagas: 275, fill: "var(--color-Marketing)" },
  { browser: "Tecnologia da Informação", vagas: 200, fill: "var(--color-TI)" },
  { browser: "Recursos Humanos", vagas: 287, fill: "var(--color-RecursosHumanos)" },
  { browser: "Limpeza", vagas: 173, fill: "var(--color-Limpeza)" },
  { browser: "Outros", vagas: 190, fill: "var(--color-Outros)" },
]

const chartConfig = {
  vagas: {
    label: "Vagas",
  },
  Marketing: {
    label: "Marketing",
    color: "hsl(var(--chart-1))",
  },
  TI: {
    label: "Tecnologia da Informação",
    color: "hsl(var(--chart-2))",
  },
  RecursosHumanos: {
    label: "Recursos Humanos",
    color: "hsl(var(--chart-3))",
  },
  Limpeza: {
    label: "Limpeza",
    color: "hsl(var(--chart-4))",
  },
  Outros: {
    label: "Outros",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig

export function Component() {
  const totalvagas = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.vagas, 0)
  }, [])

  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Quantidade de vagas por setor</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="vagas"
              nameKey="browser"
              innerRadius={60}
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          {totalvagas.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Vagas
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
