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
import { VagasPorSetorType } from "../types/vagasPorSetorType"
import api from "../service/api"

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
  const [vagasPorSetor, setVagasPorSetor] = React.useState<VagasPorSetorType[] | undefined>([])

  async function loadStats() {
    try {
      const response = await api.get("/statistics");

      const { VagasPorSetor } = response.data;
      console.log(response.data)
      setVagasPorSetor(VagasPorSetor)
      console.log(VagasPorSetor)
    } catch (error) {
      console.log(error)
    }
  }

  React.useEffect(() => {
    loadStats();
  }, [])

  const totalvagas = React.useMemo(() => {
    return vagasPorSetor?.reduce((acc, curr) => acc + curr.vagas, 0)
  }, [vagasPorSetor])

  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Quantidade de vagas por setor</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[270px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={vagasPorSetor || []}
              dataKey="vagas"
              nameKey="setor"  // Alterei para "setor" pois deve corresponder ao nome do campo do objeto
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
                          {totalvagas?.toLocaleString() || 0}
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
