import { cn } from "@/lib/utils";
import {
  BarChart3Icon,
  BotMessageSquareIcon,
  CarIcon,
  FlameIcon,
  HouseIcon,
  ReceiptTextIcon,
  SendHorizontalIcon,
  SettingsIcon,
  SlidersHorizontalIcon,
  ZapIcon,
  type LucideIcon,
} from "lucide-react";
import type { ReactNode } from "react";

/**
 * Illustrative Aura interfaces, drawn in code because no genuine
 * screenshots are available. Every value is sample data, and every
 * use must keep the visible "Illustrative interface" label.
 */

export const AURA = {
  bg: "#F6EFE4",
  surface: "#FFFBF5",
  line: "#E6D9C7",
  ink: "#2A1F19",
  muted: "#6B5D52",
  accent: "#B85A30",
  accentInk: "#9A4522",
  accentSoft: "#F3DCCB",
  gas: "#56786A",
  gasSoft: "#DDE7DF",
} as const;

const ELECTRICITY_WEEK = [7.9, 8.6, 9.2, 8.1, 10.4, 12.1, 11.2];
const GAS_WEEK = [18.2, 20.1, 24.3, 22.0, 19.4, 26.0, 25.1];
const DAYS = ["M", "T", "W", "T", "F", "S", "S"];
const ELECTRICITY_MONTH = [
  7.2, 8.1, 7.6, 9.4, 8.8, 11.6, 10.9, 7.9, 8.4, 8.0, 9.1, 9.6, 12.2, 11.4,
  7.5, 8.3, 8.9, 8.6, 9.9, 12.8, 11.1, 7.8, 8.2, 8.7, 9.3, 10.1, 12.4, 11.7,
];

/* ------------------------------------------------------------------ */
/* Shared pieces                                                       */
/* ------------------------------------------------------------------ */

/** Visible label that marks a drawing as an illustration, not a screenshot. */
export function IllustrativeTag({
  children = "Illustrative interface · Sample data",
  className,
}: {
  children?: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-[11px] font-medium leading-5",
        className,
      )}
      style={{ backgroundColor: AURA.surface, borderColor: AURA.line, color: AURA.ink }}
    >
      {children}
    </span>
  );
}

function Svg({
  width,
  height,
  children,
  className,
}: {
  width: number;
  height: number;
  children: ReactNode;
  className?: string;
}) {
  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className={cn("block h-auto w-full font-sans", className)}
      aria-hidden
      focusable="false"
    >
      {children}
    </svg>
  );
}

function AuraMark({ x, y, size = 26 }: { x: number; y: number; size?: number }) {
  const r = size / 2;
  const cx = x + r;
  const cy = y + r;
  const rays = Array.from({ length: 6 }, (_, i) => (i * Math.PI) / 3);
  return (
    <g stroke={AURA.accent} strokeWidth={size * 0.12} strokeLinecap="round">
      {rays.map((a) => (
        <line
          key={a}
          x1={cx + Math.cos(a) * r * 0.45}
          y1={cy + Math.sin(a) * r * 0.45}
          x2={cx + Math.cos(a) * r}
          y2={cy + Math.sin(a) * r}
        />
      ))}
    </g>
  );
}

function Card({
  x,
  y,
  w,
  h,
  r = 18,
}: {
  x: number;
  y: number;
  w: number;
  h: number;
  r?: number;
}) {
  return (
    <rect
      x={x}
      y={y}
      width={w}
      height={h}
      rx={r}
      fill={AURA.surface}
      stroke={AURA.line}
    />
  );
}

function Pill({
  x,
  y,
  w,
  h = 26,
  label,
  active = false,
  size = 12,
}: {
  x: number;
  y: number;
  w: number;
  h?: number;
  label: string;
  active?: boolean;
  size?: number;
}) {
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx={h / 2}
        fill={active ? AURA.accent : AURA.surface}
        stroke={active ? AURA.accent : AURA.line}
      />
      <text
        x={x + w / 2}
        y={y + h / 2 + size * 0.36}
        textAnchor="middle"
        fontSize={size}
        fontWeight={600}
        fill={active ? "#FFFFFF" : AURA.muted}
      >
        {label}
      </text>
    </g>
  );
}

function IconBadge({
  x,
  y,
  icon: Icon,
  tone = "accent",
  size = 30,
}: {
  x: number;
  y: number;
  icon: LucideIcon;
  tone?: "accent" | "gas";
  size?: number;
}) {
  const fill = tone === "gas" ? AURA.gasSoft : AURA.accentSoft;
  const stroke = tone === "gas" ? AURA.gas : AURA.accent;
  const icon = size * 0.55;
  return (
    <g>
      <rect x={x} y={y} width={size} height={size} rx={size * 0.3} fill={fill} />
      <Icon
        x={x + (size - icon) / 2}
        y={y + (size - icon) / 2}
        width={icon}
        height={icon}
        color={stroke}
        strokeWidth={1.75}
      />
    </g>
  );
}

function SampleChip({ x, y, label = "Sample data" }: { x: number; y: number; label?: string }) {
  const w = label.length * 6.6 + 22;
  return (
    <g>
      <rect x={x - w} y={y} width={w} height={24} rx={12} fill={AURA.accentSoft} />
      <text
        x={x - w / 2}
        y={y + 16}
        textAnchor="middle"
        fontSize={11}
        fontWeight={600}
        fill={AURA.accentInk}
      >
        {label}
      </text>
    </g>
  );
}

/** Paired electricity and gas bars on a shared kWh scale. */
function WeekBars({
  x,
  baseline,
  width,
  maxHeight,
  labelSize = 12,
}: {
  x: number;
  baseline: number;
  width: number;
  maxHeight: number;
  labelSize?: number;
}) {
  const max = Math.max(...GAS_WEEK, ...ELECTRICITY_WEEK);
  const group = width / DAYS.length;
  const bar = Math.max(4, group * 0.26);
  const gap = bar * 0.25;
  return (
    <g>
      <line x1={x} y1={baseline} x2={x + width} y2={baseline} stroke={AURA.line} />
      {DAYS.map((day, i) => {
        const gx = x + i * group + (group - (bar * 2 + gap)) / 2;
        const eh = (ELECTRICITY_WEEK[i] / max) * maxHeight;
        const gh = (GAS_WEEK[i] / max) * maxHeight;
        return (
          <g key={`${day}-${i}`}>
            <rect x={gx} y={baseline - eh} width={bar} height={eh} rx={bar / 3} fill={AURA.accent} />
            <rect
              x={gx + bar + gap}
              y={baseline - gh}
              width={bar}
              height={gh}
              rx={bar / 3}
              fill={AURA.gas}
            />
            <text
              x={x + i * group + group / 2}
              y={baseline + labelSize + 6}
              textAnchor="middle"
              fontSize={labelSize}
              fill={AURA.muted}
            >
              {day}
            </text>
          </g>
        );
      })}
    </g>
  );
}

function Legend({ x, y, size = 12 }: { x: number; y: number; size?: number }) {
  return (
    <g fontSize={size} fill={AURA.muted}>
      <rect x={x} y={y - size * 0.8} width={size * 0.8} height={size * 0.8} rx={2} fill={AURA.accent} />
      <text x={x + size * 1.2} y={y}>
        Electricity
      </text>
      <rect
        x={x + size * 7.4}
        y={y - size * 0.8}
        width={size * 0.8}
        height={size * 0.8}
        rx={2}
        fill={AURA.gas}
      />
      <text x={x + size * 8.6} y={y}>
        Gas
      </text>
    </g>
  );
}

/* ------------------------------------------------------------------ */
/* Desktop                                                             */
/* ------------------------------------------------------------------ */

const NAV: { label: string; icon: LucideIcon }[] = [
  { label: "Home", icon: HouseIcon },
  { label: "Usage", icon: BarChart3Icon },
  { label: "Aura AI", icon: BotMessageSquareIcon },
  { label: "Tariff", icon: ReceiptTextIcon },
  { label: "Devices", icon: SlidersHorizontalIcon },
  { label: "Settings", icon: SettingsIcon },
];

function Sidebar({ active }: { active: string }) {
  return (
    <g>
      <rect x={0} y={0} width={190} height={600} fill={AURA.surface} />
      <line x1={190} y1={0} x2={190} y2={600} stroke={AURA.line} />
      <AuraMark x={26} y={30} />
      <text x={62} y={50} fontSize={20} fontWeight={600} fill={AURA.ink}>
        aura
      </text>
      {NAV.map(({ label, icon: Icon }, i) => {
        const y = 96 + i * 46;
        const on = label === active;
        return (
          <g key={label}>
            {on && <rect x={14} y={y} width={162} height={36} rx={11} fill={AURA.accentSoft} />}
            <Icon
              x={28}
              y={y + 9}
              width={18}
              height={18}
              color={on ? AURA.accentInk : AURA.muted}
              strokeWidth={1.75}
            />
            <text
              x={56}
              y={y + 23}
              fontSize={14}
              fontWeight={on ? 600 : 500}
              fill={on ? AURA.accentInk : AURA.muted}
            >
              {label}
            </text>
          </g>
        );
      })}
    </g>
  );
}

function DesktopFrame({ children }: { children: ReactNode }) {
  return (
    <>
      <rect x={0} y={0} width={960} height={600} fill={AURA.bg} />
      {children}
    </>
  );
}

export function DesktopDashboard({ className }: { className?: string }) {
  return (
    <Svg width={960} height={600} className={className}>
      <DesktopFrame>
        <Sidebar active="Home" />

        <text x={214} y={58} fontSize={26} fontWeight={600} fill={AURA.ink}>
          Home overview
        </text>
        <text x={214} y={82} fontSize={13} fill={AURA.muted}>
          Sample household · Prepayment meter
        </text>
        <SampleChip x={940} y={40} />

        {/* Electricity */}
        <Card x={214} y={106} w={230} h={120} />
        <IconBadge x={232} y={124} icon={ZapIcon} />
        <text x={272} y={144} fontSize={13} fontWeight={600} fill={AURA.ink}>
          Electricity
        </text>
        <text x={232} y={188} fontSize={28} fontWeight={600} fill={AURA.ink}>
          8.4 kWh
        </text>
        <text x={232} y={210} fontSize={12} fill={AURA.muted}>
          Yesterday · complete day
        </text>

        {/* Gas */}
        <Card x={462} y={106} w={230} h={120} />
        <IconBadge x={480} y={124} icon={FlameIcon} tone="gas" />
        <text x={520} y={144} fontSize={13} fontWeight={600} fill={AURA.ink}>
          Gas
        </text>
        <text x={480} y={188} fontSize={28} fontWeight={600} fill={AURA.ink}>
          21.7 kWh
        </text>
        <text x={480} y={210} fontSize={12} fill={AURA.muted}>
          Converted from m³
        </text>

        {/* Tariff */}
        <Card x={710} y={106} w={230} h={120} />
        <IconBadge x={728} y={124} icon={ReceiptTextIcon} />
        <text x={768} y={144} fontSize={13} fontWeight={600} fill={AURA.ink}>
          Import tariff
        </text>
        <g fontSize={12}>
          <text x={728} y={178} fill={AURA.muted}>
            Off-peak
          </text>
          <text x={922} y={178} textAnchor="end" fontWeight={600} fill={AURA.ink}>
            00:30–07:30
          </text>
          <text x={728} y={198} fill={AURA.muted}>
            Peak
          </text>
          <text x={922} y={198} textAnchor="end" fontWeight={600} fill={AURA.ink}>
            07:30–00:30
          </text>
          <text x={728} y={216} fontWeight={600} fill={AURA.accentInk}>
            Compare suppliers ↗
          </text>
        </g>

        {/* Weekly usage */}
        <Card x={214} y={244} w={478} h={332} />
        <text x={238} y={280} fontSize={16} fontWeight={600} fill={AURA.ink}>
          This week
        </text>
        <Pill x={480} y={262} w={60} label="Day" />
        <Pill x={544} y={262} w={64} label="Week" active />
        <Pill x={612} y={262} w={64} label="Month" />
        <Legend x={238} y={316} />
        <text x={668} y={316} textAnchor="end" fontSize={11} fill={AURA.muted}>
          Today excluded · incomplete
        </text>
        <WeekBars x={238} baseline={530} width={430} maxHeight={186} />

        {/* Energy-flow illustration */}
        <Card x={710} y={244} w={230} h={196} />
        <text x={728} y={276} fontSize={14} fontWeight={600} fill={AURA.ink}>
          Energy flow
        </text>
        <EnergyFlow x={710} y={284} />
        <text x={825} y={428} textAnchor="middle" fontSize={11} fill={AURA.muted}>
          Illustration · not live telemetry
        </text>

        {/* Ask Aura */}
        <Card x={710} y={458} w={230} h={118} />
        <IconBadge x={728} y={474} icon={BotMessageSquareIcon} size={26} />
        <text x={764} y={492} fontSize={14} fontWeight={600} fill={AURA.ink}>
          Ask Aura
        </text>
        <rect x={728} y={512} width={194} height={42} rx={21} fill={AURA.bg} stroke={AURA.line} />
        <text x={744} y={537} fontSize={11.5} fill={AURA.muted}>
          How did I use energy this week?
        </text>
      </DesktopFrame>
    </Svg>
  );
}

/** House with separate electricity, gas and EV indicators. Decorative. */
function EnergyFlow({ x, y }: { x: number; y: number }) {
  const cx = x + 115;
  const cy = y + 66;
  const nodes: { nx: number; ny: number; icon: LucideIcon; tone: "accent" | "gas" }[] = [
    { nx: x + 34, ny: y + 52, icon: ZapIcon, tone: "accent" },
    { nx: x + 168, ny: y + 52, icon: FlameIcon, tone: "gas" },
    { nx: x + 101, ny: y + 106, icon: CarIcon, tone: "accent" },
  ];
  return (
    <g>
      {nodes.map(({ nx, ny }) => (
        <line
          key={`${nx}-${ny}`}
          x1={nx + 14}
          y1={ny + 14}
          x2={cx}
          y2={cy}
          stroke={AURA.line}
          strokeWidth={2}
          strokeDasharray="4 5"
        />
      ))}
      <path
        d={`M ${cx - 26} ${cy - 2} L ${cx} ${cy - 26} L ${cx + 26} ${cy - 2} L ${cx + 26} ${cy + 22} L ${cx - 26} ${cy + 22} Z`}
        fill={AURA.surface}
        stroke={AURA.ink}
        strokeWidth={2}
        strokeLinejoin="round"
      />
      <rect x={cx - 7} y={cy + 6} width={14} height={16} rx={2} fill={AURA.accentSoft} />
      {nodes.map(({ nx, ny, icon, tone }) => (
        <IconBadge key={`${nx}-${ny}-icon`} x={nx} y={ny} icon={icon} tone={tone} size={28} />
      ))}
    </g>
  );
}

export function DesktopDevices({ className }: { className?: string }) {
  return (
    <Svg width={960} height={600} className={className}>
      <DesktopFrame>
        <Sidebar active="Devices" />

        <text x={214} y={58} fontSize={26} fontWeight={600} fill={AURA.ink}>
          Devices
        </text>
        <text x={214} y={82} fontSize={13} fill={AURA.muted}>
          Planning interface · not connected to equipment
        </text>
        <SampleChip x={940} y={40} label="Interface only" />

        <Pill x={214} y={104} w={56} label="All" active />
        <Pill x={276} y={104} w={78} label="Heating" />
        <Pill x={360} y={104} w={100} label="EV charging" />
        <Pill x={466} y={104} w={80} label="Lighting" />
        <Pill x={552} y={104} w={64} label="Plugs" />

        <g fontSize={12} fill={AURA.muted}>
          <text x={214} y={160}>
            Rooms
          </text>
        </g>
        <Pill x={262} y={144} w={96} label="Living room" />
        <Pill x={364} y={144} w={72} label="Kitchen" />
        <Pill x={442} y={144} w={78} label="Bedroom" />
        <Pill x={526} y={144} w={70} label="Garage" />

        {/* Thermostat */}
        <Card x={214} y={190} w={300} h={240} />
        <text x={236} y={222} fontSize={14} fontWeight={600} fill={AURA.ink}>
          Thermostat
        </text>
        <text x={236} y={240} fontSize={12} fill={AURA.muted}>
          Living room
        </text>
        <circle cx={364} cy={326} r={62} fill="none" stroke={AURA.line} strokeWidth={12} />
        <circle
          cx={364}
          cy={326}
          r={62}
          fill="none"
          stroke={AURA.accent}
          strokeWidth={12}
          strokeLinecap="round"
          strokeDasharray={`${2 * Math.PI * 62 * 0.62} ${2 * Math.PI * 62}`}
          transform="rotate(130 364 326)"
        />
        <text x={364} y={332} textAnchor="middle" fontSize={26} fontWeight={600} fill={AURA.ink}>
          19.5°C
        </text>
        <text x={364} y={352} textAnchor="middle" fontSize={11} fill={AURA.muted}>
          Target
        </text>
        <circle cx={256} cy={400} r={16} fill={AURA.bg} stroke={AURA.line} />
        <text x={256} y={405} textAnchor="middle" fontSize={16} fontWeight={600} fill={AURA.ink}>
          −
        </text>
        <circle cx={472} cy={400} r={16} fill={AURA.bg} stroke={AURA.line} />
        <text x={472} y={405} textAnchor="middle" fontSize={16} fontWeight={600} fill={AURA.ink}>
          +
        </text>

        {/* EV charging */}
        <Card x={532} y={190} w={408} h={240} />
        <IconBadge x={552} y={210} icon={CarIcon} />
        <text x={592} y={230} fontSize={14} fontWeight={600} fill={AURA.ink}>
          EV charger
        </text>
        <Toggle x={880} y={212} on />
        <g fontSize={12}>
          <text x={552} y={278} fill={AURA.muted}>
            Off-peak schedule
          </text>
          <text x={920} y={278} textAnchor="end" fontWeight={600} fill={AURA.ink}>
            00:30–04:30
          </text>
          <line x1={552} y1={294} x2={920} y2={294} stroke={AURA.line} />
          <text x={552} y={322} fill={AURA.muted}>
            Charge target
          </text>
          <text x={920} y={322} textAnchor="end" fontWeight={600} fill={AURA.ink}>
            80%
          </text>
        </g>
        <rect x={552} y={340} width={368} height={12} rx={6} fill={AURA.bg} stroke={AURA.line} />
        <rect x={552} y={340} width={368 * 0.8} height={12} rx={6} fill={AURA.accent} />
        <text x={552} y={400} fontSize={11.5} fill={AURA.muted}>
          Scheduling interface. Running schedules on equipment is planned.
        </text>

        {/* Automations */}
        <Card x={214} y={448} w={726} h={128} />
        <text x={236} y={480} fontSize={14} fontWeight={600} fill={AURA.ink}>
          Automations
        </text>
        <g fontSize={12.5}>
          <text x={236} y={514} fontWeight={600} fill={AURA.ink}>
            Weekday mornings
          </text>
          <text x={420} y={514} fill={AURA.muted}>
            Heating to 20°C at 06:30
          </text>
          <Toggle x={880} y={500} on />
          <line x1={236} y1={530} x2={920} y2={530} stroke={AURA.line} />
          <text x={236} y={556} fontWeight={600} fill={AURA.ink}>
            Off-peak charging
          </text>
          <text x={420} y={556} fill={AURA.muted}>
            Start EV charging at 00:30
          </text>
          <Toggle x={880} y={542} />
        </g>
      </DesktopFrame>
    </Svg>
  );
}

function Toggle({ x, y, on = false }: { x: number; y: number; on?: boolean }) {
  return (
    <g>
      <rect x={x} y={y} width={40} height={22} rx={11} fill={on ? AURA.accent : AURA.line} />
      <circle cx={on ? x + 29 : x + 11} cy={y + 11} r={8} fill="#FFFFFF" />
    </g>
  );
}

/* ------------------------------------------------------------------ */
/* Mobile                                                              */
/* ------------------------------------------------------------------ */

function Phone({ title, children, className }: { title: string; children: ReactNode; className?: string }) {
  return (
    <Svg width={320} height={640} className={className}>
      <rect x={0} y={0} width={320} height={640} rx={44} fill={AURA.ink} />
      <rect x={9} y={9} width={302} height={622} rx={36} fill={AURA.bg} />
      <text x={36} y={44} fontSize={13} fontWeight={600} fill={AURA.ink}>
        9:41
      </text>
      <rect x={124} y={26} width={72} height={22} rx={11} fill={AURA.ink} />
      <text x={28} y={92} fontSize={24} fontWeight={600} fill={AURA.ink}>
        {title}
      </text>
      {children}
    </Svg>
  );
}

function TabBar({ active }: { active: string }) {
  const tabs = NAV.slice(0, 5);
  return (
    <g>
      <line x1={9} y1={566} x2={311} y2={566} stroke={AURA.line} />
      {tabs.map(({ label, icon: Icon }, i) => {
        const cx = 42 + i * 59;
        const on = label === active;
        return (
          <g key={label}>
            <Icon
              x={cx - 10}
              y={578}
              width={20}
              height={20}
              color={on ? AURA.accentInk : AURA.muted}
              strokeWidth={1.75}
            />
            <text
              x={cx}
              y={612}
              textAnchor="middle"
              fontSize={10}
              fontWeight={on ? 600 : 500}
              fill={on ? AURA.accentInk : AURA.muted}
            >
              {label}
            </text>
          </g>
        );
      })}
    </g>
  );
}

export function MobileHome({ className }: { className?: string }) {
  return (
    <Phone title="Home" className={className}>
      <SampleChip x={292} y={74} />

      <Card x={24} y={112} w={272} h={96} />
      <IconBadge x={40} y={128} icon={ZapIcon} size={28} />
      <text x={78} y={147} fontSize={13} fontWeight={600} fill={AURA.ink}>
        Electricity
      </text>
      <text x={40} y={188} fontSize={24} fontWeight={600} fill={AURA.ink}>
        8.4 kWh
      </text>
      <text x={280} y={188} textAnchor="end" fontSize={11} fill={AURA.muted}>
        Yesterday
      </text>

      <Card x={24} y={220} w={272} h={96} />
      <IconBadge x={40} y={236} icon={FlameIcon} tone="gas" size={28} />
      <text x={78} y={255} fontSize={13} fontWeight={600} fill={AURA.ink}>
        Gas
      </text>
      <text x={40} y={296} fontSize={24} fontWeight={600} fill={AURA.ink}>
        21.7 kWh
      </text>
      <text x={280} y={296} textAnchor="end" fontSize={11} fill={AURA.muted}>
        Yesterday
      </text>

      <Card x={24} y={328} w={272} h={164} />
      <text x={40} y={356} fontSize={13} fontWeight={600} fill={AURA.ink}>
        This week
      </text>
      <Legend x={150} y={356} size={10} />
      <WeekBars x={40} baseline={462} width={240} maxHeight={84} labelSize={10} />

      <rect x={24} y={506} width={272} height={44} rx={22} fill={AURA.surface} stroke={AURA.line} />
      <AuraMark x={38} y={518} size={20} />
      <text x={68} y={533} fontSize={12} fill={AURA.muted}>
        Ask Aura about your energy
      </text>

      <TabBar active="Home" />
    </Phone>
  );
}

export function MobileUsage({ className }: { className?: string }) {
  const max = Math.max(...ELECTRICITY_MONTH);
  const total = ELECTRICITY_MONTH.reduce((sum, v) => sum + v, 0);
  const baseline = 386;
  const step = 240 / ELECTRICITY_MONTH.length;
  return (
    <Phone title="Usage" className={className}>
      <SampleChip x={292} y={74} />

      <rect x={24} y={110} width={272} height={34} rx={17} fill={AURA.surface} stroke={AURA.line} />
      <Pill x={28} y={114} w={86} h={26} label="Day" />
      <Pill x={117} y={114} w={86} h={26} label="Week" />
      <Pill x={206} y={114} w={86} h={26} label="Month" active />

      <Pill x={24} y={156} w={100} label="Electricity" active size={11} />
      <Pill x={130} y={156} w={56} label="Gas" size={11} />

      <Card x={24} y={196} w={272} h={222} />
      <text x={40} y={224} fontSize={12} fill={AURA.muted}>
        Last 28 complete days
      </text>
      <text x={40} y={256} fontSize={26} fontWeight={600} fill={AURA.ink}>
        {`${Math.round(total)} kWh`}
      </text>
      <line x1={40} y1={baseline} x2={280} y2={baseline} stroke={AURA.line} />
      {ELECTRICITY_MONTH.map((v, i) => {
        const h = (v / max) * 104;
        return (
          <rect
            key={i}
            x={40 + i * step + step * 0.18}
            y={baseline - h}
            width={step * 0.64}
            height={h}
            rx={2}
            fill={AURA.accent}
          />
        );
      })}
      <g fontSize={10} fill={AURA.muted}>
        <text x={40} y={404}>
          4 weeks ago
        </text>
        <text x={280} y={404} textAnchor="end">
          Yesterday
        </text>
      </g>

      <Card x={24} y={430} w={272} h={92} />
      <text x={40} y={456} fontSize={12} fontWeight={600} fill={AURA.ink}>
        Highest use on Saturdays
      </text>
      <text x={40} y={476} fontSize={11.5} fill={AURA.muted}>
        Mostly between 17:00 and 20:00.
      </text>
      <text x={40} y={504} fontSize={10.5} fill={AURA.muted}>
        Incomplete days are left out of totals.
      </text>

      <TabBar active="Usage" />
    </Phone>
  );
}

function Bubble({
  x,
  y,
  w,
  lines,
  from,
}: {
  x: number;
  y: number;
  w: number;
  lines: string[];
  from: "user" | "aura";
}) {
  const h = lines.length * 17 + 18;
  const user = from === "user";
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx={16}
        fill={user ? AURA.accent : AURA.surface}
        stroke={user ? AURA.accent : AURA.line}
      />
      {lines.map((line, i) => (
        <text
          key={`${i}-${line}`}
          x={x + 14}
          y={y + 24 + i * 17}
          fontSize={12}
          fill={user ? "#FFFFFF" : AURA.ink}
        >
          {line}
        </text>
      ))}
    </g>
  );
}

export function MobileChat({ className }: { className?: string }) {
  return (
    <Phone title="Aura AI" className={className}>
      <SampleChip x={292} y={74} label="Illustrative" />

      <rect x={24} y={108} width={272} height={30} rx={15} fill={AURA.accentSoft} />
      <text x={160} y={127} textAnchor="middle" fontSize={10.5} fontWeight={600} fill={AURA.accentInk}>
        Household profile: prepayment · gas heating
      </text>

      <Bubble x={112} y={152} w={184} from="user" lines={["Why was my gas use", "higher this week?"]} />
      <Bubble
        x={24}
        y={212}
        w={232}
        from="aura"
        lines={[
          "It rose on the three coldest",
          "days, mostly in the evening.",
          "On a prepayment meter, it may",
          "help to check your credit",
          "before the weekend.",
        ]}
      />
      <Bubble x={128} y={330} w={168} from="user" lines={["Can you turn the", "heating down?"]} />
      <Bubble
        x={24}
        y={390}
        w={232}
        from="aura"
        lines={["I can\u2019t control your devices.", "You can change the thermostat", "settings in Devices."]}
      />

      <rect x={24} y={508} width={272} height={44} rx={22} fill={AURA.surface} stroke={AURA.line} />
      <text x={42} y={535} fontSize={12} fill={AURA.muted}>
        Ask about your energy…
      </text>
      <circle cx={274} cy={530} r={16} fill={AURA.accent} />
      <SendHorizontalIcon x={266} y={522} width={16} height={16} color="#FFFFFF" strokeWidth={1.75} />

      <TabBar active="Aura AI" />
    </Phone>
  );
}

export function MobileTariff({ className }: { className?: string }) {
  return (
    <Phone title="Tariff" className={className}>
      <SampleChip x={292} y={74} />

      <Card x={24} y={110} w={272} h={180} />
      <IconBadge x={40} y={126} icon={ReceiptTextIcon} size={28} />
      <text x={78} y={145} fontSize={13} fontWeight={600} fill={AURA.ink}>
        Import tariff
      </text>
      <g fontSize={12}>
        <text x={40} y={186} fill={AURA.muted}>
          Off-peak
        </text>
        <text x={280} y={186} textAnchor="end" fontWeight={600} fill={AURA.ink}>
          00:30–07:30
        </text>
        <line x1={40} y1={200} x2={280} y2={200} stroke={AURA.line} />
        <text x={40} y={222} fill={AURA.muted}>
          Peak
        </text>
        <text x={280} y={222} textAnchor="end" fontWeight={600} fill={AURA.ink}>
          07:30–00:30
        </text>
      </g>
      <rect x={40} y={240} width={240} height={34} rx={17} fill={AURA.surface} stroke={AURA.accent} />
      <text x={160} y={262} textAnchor="middle" fontSize={12} fontWeight={600} fill={AURA.accentInk}>
        Compare suppliers ↗
      </text>

      <Card x={24} y={304} w={272} h={246} />
      <text x={40} y={334} fontSize={13} fontWeight={600} fill={AURA.ink}>
        Connect Octopus
      </text>
      <text x={40} y={354} fontSize={11.5} fill={AURA.muted}>
        Import consumption data for your meters.
      </text>
      <text x={40} y={384} fontSize={11} fontWeight={600} fill={AURA.ink}>
        Account number
      </text>
      <rect x={40} y={392} width={240} height={34} rx={10} fill={AURA.bg} stroke={AURA.line} />
      <text x={52} y={414} fontSize={12} fill={AURA.muted}>
        A-XXXXXXXX
      </text>
      <text x={40} y={446} fontSize={11} fontWeight={600} fill={AURA.ink}>
        API key
      </text>
      <rect x={40} y={454} width={240} height={34} rx={10} fill={AURA.bg} stroke={AURA.line} />
      <text x={52} y={476} fontSize={12} fill={AURA.muted}>
        ••••••••••••
      </text>
      <rect x={40} y={500} width={240} height={36} rx={18} fill={AURA.accent} />
      <text x={160} y={523} textAnchor="middle" fontSize={12.5} fontWeight={600} fill="#FFFFFF">
        Connect
      </text>

      <TabBar active="Tariff" />
    </Phone>
  );
}

/* ------------------------------------------------------------------ */
/* Composite and motifs                                                */
/* ------------------------------------------------------------------ */

/**
 * Desktop dashboard with a smaller phone in front.
 * "card" fits a 2:1 cover; "hero" fits a 16:10 frame.
 */
export function AuraPortalComposite({
  variant = "hero",
  className,
}: {
  variant?: "card" | "hero";
  className?: string;
}) {
  const card = variant === "card";
  return (
    <div
      role="img"
      aria-label="Illustrative interface of the Aura Energy Portal home dashboard on desktop, with a smaller mobile view, showing sample electricity and gas usage."
      className={cn(
        "relative h-full w-full overflow-hidden",
        card ? "aspect-[2/1]" : "aspect-[16/10]",
        className,
      )}
      style={{ backgroundColor: AURA.bg }}
    >
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse at 80% 100%, ${AURA.accentSoft}, transparent 60%)`,
        }}
      />
      <div
        className={cn(
          "absolute overflow-hidden border shadow-sm",
          card
            ? "left-[5%] top-[8%] w-[70%] rounded-lg"
            : "left-[4%] top-[7%] w-[78%] rounded-xl",
        )}
        style={{ borderColor: AURA.line }}
      >
        <DesktopDashboard />
      </div>
      <div
        className={cn(
          "absolute drop-shadow-md",
          card ? "right-[5%] top-[14%] w-[19%]" : "right-[4%] top-[18%] w-[21%]",
        )}
      >
        <MobileHome />
      </div>
      <IllustrativeTag
        className={cn("absolute", card ? "bottom-2 left-2 text-[10px]" : "bottom-3 left-3")}
      />
    </div>
  );
}

/** House with separate electricity, gas and EV indicators. */
export function HouseMotif({ className }: { className?: string }) {
  const indicators: { label: string; note: string; icon: LucideIcon; tone: "accent" | "gas" }[] = [
    { label: "Electricity", note: "Usage in kWh", icon: ZapIcon, tone: "accent" },
    { label: "Gas", note: "Converted to kWh", icon: FlameIcon, tone: "gas" },
    { label: "EV", note: "Interface only", icon: CarIcon, tone: "accent" },
  ];
  return (
    <figure
      className={cn("flex flex-col items-center gap-5 rounded-2xl border p-6", className)}
      style={{ backgroundColor: AURA.bg, borderColor: AURA.line, color: AURA.ink }}
    >
      <svg viewBox="0 0 160 120" className="h-auto w-36" aria-hidden focusable="false">
        <path
          d="M 20 58 L 80 12 L 140 58 L 140 108 L 20 108 Z"
          fill={AURA.surface}
          stroke={AURA.ink}
          strokeWidth={3}
          strokeLinejoin="round"
        />
        <rect x={68} y={72} width={24} height={36} rx={3} fill={AURA.accentSoft} />
        <rect x={34} y={66} width={22} height={18} rx={3} fill={AURA.gasSoft} />
        <rect x={104} y={66} width={22} height={18} rx={3} fill={AURA.gasSoft} />
        <AuraMark x={70} y={34} size={20} />
      </svg>
      <ul className="grid w-full grid-cols-3 gap-2">
        {indicators.map(({ label, note, icon: Icon, tone }) => (
          <li
            key={label}
            className="flex flex-col items-center gap-1.5 rounded-xl border px-2 py-3 text-center"
            style={{ backgroundColor: AURA.surface, borderColor: AURA.line }}
          >
            <span
              className="flex size-8 items-center justify-center rounded-lg"
              style={{ backgroundColor: tone === "gas" ? AURA.gasSoft : AURA.accentSoft }}
            >
              <Icon
                className="size-4"
                strokeWidth={1.75}
                color={tone === "gas" ? AURA.gas : AURA.accentInk}
                aria-hidden
              />
            </span>
            <span className="text-xs font-semibold">{label}</span>
            <span className="text-[11px] leading-tight" style={{ color: AURA.muted }}>
              {note}
            </span>
          </li>
        ))}
      </ul>
      <figcaption className="text-xs" style={{ color: AURA.muted }}>
        Illustration: one home, with each energy source shown separately.
      </figcaption>
    </figure>
  );
}
