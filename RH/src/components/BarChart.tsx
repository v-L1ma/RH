"use client"

import { Bar, BarChart, CartesianGrid, LabelList, XAxis } from "recharts"

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
import { useEffect, useState } from "react"
import api from "../service/api"

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

    const response = await api.get("/statistics");
    console.log(response);

    const {vagasPorMes} = response.data;

    SetVagasPorMes(vagasPorMes)
    
      
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
        <CardTitle>Vagas abertas por mês</CardTitle>
        <CardDescription>Janeiro - Dezembro 2025</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={vagasPorMes}
            margin={{
              top: 20,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="mes"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="Vagas" fill="var(--color-Vagas)" radius={8}>
              <LabelList
                position="top"
                offset={12}
                className="fill-foreground"
                fontSize={12}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}







