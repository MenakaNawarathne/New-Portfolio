import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const STACK = [
  "Arduino",
  "ESP8266",
  "ESP32",
  "Bluetooth",
  "Sensors",
  "Servo Motors",
  "Motor Drivers",
  "Wi-Fi",
  "Firebase",
  "Real-time communication",
];

const IOT_SKILLS = [
  "Sensor integration",
  "Microcontroller programming",
  "Device communication",
  "Bluetooth communication",
  "Wi-Fi connectivity",
  "Real-time monitoring",
  "Automation",
  "Hardware-software integration",
  "Robotics concepts",
];

export default function IoT() {
  return (
    <section id="iot" className="border-b border-line py-24">
      <div className="mx-auto max-w-content px-6">
        <Reveal>
          <SectionHeading
            eyebrow="/iot"
            title="Connecting Software With the Physical World"
            lede="I'm also interested in IoT, robotics, and hardware-software integration."
          />
        </Reveal>

        <div className="grid gap-10 lg:grid-cols-2">
          <Reveal>
            <h3 className="mb-4 font-mono text-xs uppercase tracking-wider text-muted">
              Experience with
            </h3>
            <div className="flex flex-wrap gap-2">
              {STACK.map((item) => (
                <span
                  key={item}
                  className="rounded-sm border border-line bg-paper-dim px-3 py-1.5 font-mono text-xs text-ink-soft"
                >
                  {item}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={100}>
            <h3 className="mb-4 font-mono text-xs uppercase tracking-wider text-muted">
              IoT Skills
            </h3>
            <ul className="grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
              {IOT_SKILLS.map((s) => (
                <li
                  key={s}
                  className="flex items-start gap-2 text-sm leading-relaxed text-ink-soft"
                >
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-copper" />
                  {s}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
