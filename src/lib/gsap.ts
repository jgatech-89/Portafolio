"use client";

/**
 * Punto de entrada único a GSAP: registra los plugins una sola vez para que
 * el resto de componentes importe siempre desde aquí en lugar de registrar
 * plugins por su cuenta.
 */
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

export { gsap, useGSAP, ScrollTrigger, SplitText };
