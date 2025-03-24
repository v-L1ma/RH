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
  Administrativo: {
    label: "Administrativo",
    color: "hsl(var(--chart-6))", // Defina a cor apropriada para "Administrativo"
  },
  Financeiro: {
    label: "Financeiro",
    color: "hsl(var(--chart-7))", // Defina a cor apropriada para "Financeiro"
  },
  Comercial: {
    label: "Comercial",
    color: "hsl(var(--chart-8))", // Defina a cor apropriada para "Comercial"
  },
  Vendas: {
    label: "Vendas",
    color: "hsl(var(--chart-9))", // Defina a cor apropriada para "Vendas"
  },
  AtendimentoAoCliente: {
    label: "Atendimento ao Cliente",
    color: "hsl(var(--chart-10))", // Defina a cor apropriada para "Atendimento ao Cliente"
  },
  Logistica: {
    label: "Logística",
    color: "hsl(var(--chart-11))", // Defina a cor apropriada para "Logística"
  },
  Juridico: {
    label: "Jurídico",
    color: "hsl(var(--chart-12))", // Defina a cor apropriada para "Jurídico"
  },
  ProducaoManufatura: {
    label: "Produção / Manufatura",
    color: "hsl(var(--chart-13))", // Defina a cor apropriada para "Produção"
  },
  ComprasSuprimentos: {
    label: "Compras / Suprimentos",
    color: "hsl(var(--chart-14))", // Defina a cor apropriada para "Compras"
  },
  Almoxarifado: {
    label: "Almoxarifado",
    color: "hsl(var(--chart-15))", // Defina a cor apropriada para "Almoxarifado"
  },
  Qualidade: {
    label: "Qualidade",
    color: "hsl(var(--chart-16))", // Defina a cor apropriada para "Qualidade"
  },
  SegurancaDoTrabalho: {
    label: "Segurança do Trabalho",
    color: "hsl(var(--chart-17))", // Defina a cor apropriada para "Segurança"
  },
} satisfies ChartConfig;

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
          className="mx-auto"
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
