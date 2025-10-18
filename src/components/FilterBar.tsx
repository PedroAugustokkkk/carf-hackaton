import { Filter } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

const FilterBar = () => {
  return (
    <div className="flex flex-wrap items-center gap-3 rounded-lg border border-border bg-card p-4 shadow-sm">
      <div className="flex items-center gap-2">
        <Filter className="h-4 w-4 text-muted-foreground" />
        <span className="text-sm font-medium">Filtros:</span>
      </div>

      <Select defaultValue="todas">
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Unidade" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="todas">Todas as Unidades</SelectItem>
          <SelectItem value="df">CARF/DF</SelectItem>
          <SelectItem value="sp">CARF/SP</SelectItem>
          <SelectItem value="rj">CARF/RJ</SelectItem>
        </SelectContent>
      </Select>

      <Select defaultValue="todos">
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Cargo" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="todos">Todos os Cargos</SelectItem>
          <SelectItem value="analista">Analista Tributária</SelectItem>
          <SelectItem value="tecnico">Técnico Administrativo</SelectItem>
          <SelectItem value="gestor">Gestor</SelectItem>
        </SelectContent>
      </Select>

      <Select defaultValue="todos-vinculos">
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Tipo de Vínculo" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="todos-vinculos">Todos os Vínculos</SelectItem>
          <SelectItem value="efetivo">Servidor Efetivo</SelectItem>
          <SelectItem value="comissionado">Comissionado</SelectItem>
          <SelectItem value="terceirizado">Terceirizado</SelectItem>
        </SelectContent>
      </Select>

      <Button variant="outline" size="sm" className="ml-auto">
        Limpar Filtros
      </Button>
    </div>
  );
};

export default FilterBar;
