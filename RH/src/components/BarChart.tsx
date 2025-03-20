"use client"
import { Bar, BarChart, XAxis, YAxis } from "recharts"

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
import api from "../service/api"
import { useEffect, useState } from "react"
const chartConfig = {
  Vagas: {
    label: "Vagas",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig

export function BarChartComponent() {

  const [vagasPorMes,SetVagasPorMes] = useState<any>([])

  async function loadData() {

    try {

    //const response = await api.get("/statistics");

    SetVagasPorMes([
      { mes: "Janeiro", Vagas: 11 },
      { mes: "Fevereiro", Vagas: 22 },
      { mes: "Marco", Vagas: 3 },
      { mes: "Abril", Vagas: 4 },
      { mes: "Maio", Vagas: 5 },
      { mes: "Junho", Vagas: 1 },
      { mes: "Julho", Vagas: 1 },
      { mes: "Agosto", Vagas: 1 },
      { mes: "Setembro", Vagas: 1 },
      { mes: "Outubro", Vagas: 1 },
      { mes: "Novembro", Vagas: 1 },
      { mes: "Dezembro", Vagas: 1 },
    ])
    
      
    } catch (error) {
      console.log(error)
    }
  } 

  useEffect(()=>{
    loadData()
  },[])


  return (
    <Card>
      <CardHeader>
        <CardTitle>Vagas por mês</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={vagasPorMes}
            layout="vertical"
            margin={{
              left: -20,
            }}
          >
            <XAxis type="number" dataKey="Vagas" hide />
            <YAxis
              dataKey="mes"
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="Vagas" fill="var(--color-Vagas)" radius={5} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
