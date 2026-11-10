export type BlogSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type BlogArticle = {
  slug: string;
  title: string;
  description: string;
  publishedDate: string;
  updatedDate: string;
  readTime: string;
  relatedService: { label: string; href: `/services/${string}` };
  sections: BlogSection[];
};

export const blogArticles: BlogArticle[] = [
  {
    slug: "hard-water-hampshire-homes",
    title: "Hard Water Solutions for Hampshire Homes",
    description: "A practical guide to spotting limescale, protecting hot-water equipment and choosing a suitable hard-water treatment for a Hampshire home.",
    publishedDate: "2026-11-07",
    updatedDate: "2026-11-07",
    readTime: "8 minute read",
    relatedService: { label: "Power flushing and hard-water protection", href: "/services/power-flushing-hard-water" },
    sections: [
      {
        heading: "What hard water means for a home",
        paragraphs: [
          "Hard water contains naturally occurring minerals, mainly calcium and magnesium. It is safe to use, but when the water is heated or allowed to dry it can leave a hard, chalky deposit called limescale. Kettles and shower screens show the most obvious signs, while deposits inside taps, valves and hot-water equipment are much harder to see.",
          "The effect varies between properties. Water temperature, usage, the age and design of the plumbing, and how regularly equipment is maintained all matter. A visible mark on a tap does not prove that a boiler or cylinder has failed, and it does not automatically mean that a whole-house treatment system is needed. A sensible first step is to identify the actual symptom and the equipment affected.",
        ],
      },
      {
        heading: "Common warning signs",
        paragraphs: [
          "White crust around tap outlets, cloudy marks on shower glass and a rough deposit on heating elements are familiar signs. You may also notice reduced flow through a shower head, a tap aerator that blocks repeatedly, or appliances that need descaling more often than expected. These symptoms are useful clues, but several plumbing faults can also restrict flow, so diagnosis should not rely on appearance alone.",
          "Hot-water performance deserves attention when it changes. Longer heat-up times, unusual noise from an appliance or inconsistent temperature can have several causes, including scale, sludge, controls or a mechanical fault. Record when the problem occurs and whether it affects every outlet. That information helps an engineer separate a local tap or shower problem from an issue with the wider hot-water system.",
        ],
      },
      {
        heading: "Simple maintenance before buying equipment",
        paragraphs: [
          "Small, removable fittings can often be maintained without altering the plumbing system. Follow the manufacturer’s instructions for cleaning shower heads, tap aerators and suitable appliances. Do not mix cleaning products, and do not dismantle a boiler, unvented cylinder or gas appliance. Work on gas appliances must be carried out by an appropriately registered Gas Safe engineer.",
          "Check appliance manuals before using a descaling product because acids and other cleaners may damage seals, finishes or internal parts. Keep any existing filters maintained to their manufacturer’s schedule. If scale returns quickly, flow remains poor or the problem involves fixed equipment, arrange an assessment rather than repeatedly treating the visible symptom.",
        ],
      },
      {
        heading: "Scale reducers, conditioners and softeners",
        paragraphs: [
          "Products sold for hard-water control do different jobs. A physical or magnetic conditioner is intended to change how scale behaves but does not remove hardness minerals from the incoming water. A dosing system introduces a treatment chemical and must be selected, installed and maintained correctly. Performance depends on the product, the water supply and the intended application, so broad promises should be treated cautiously.",
          "An ion-exchange water softener removes hardness minerals and replaces them with sodium ions. It needs salt, servicing, space and a suitable drain connection. A separate unsoftened drinking-water tap may be recommended, and the softened supply may not be suitable for every appliance or user. Selection should follow the water supplier’s information, appliance instructions and an assessment of the property rather than a one-size-fits-all package.",
        ],
      },
      {
        heading: "Protecting boilers and heating systems",
        paragraphs: [
          "Limescale on the domestic hot-water side and corrosion sludge on the sealed heating side are different problems. A magnetic heating filter can collect some circulating iron debris, but it does not soften the incoming mains water. Likewise, a water softener does not replace correct cleaning, inhibitor concentration or maintenance within a central-heating circuit.",
          "If radiators have cold areas, the boiler is noisy or circulation is poor, the system should be assessed before power flushing is suggested. The engineer may inspect water condition, valves, pumps, filters and system layout. Cleaning method and chemical treatment should match the system’s condition, because aggressive cleaning is not appropriate for every installation and may expose weaknesses in old pipework or radiators.",
        ],
      },
      {
        heading: "Questions to ask before choosing a solution",
        paragraphs: [
          "Ask what problem the proposed equipment is intended to solve, what evidence supports that diagnosis and what ongoing maintenance is required. Confirm whether the quotation covers installation materials, commissioning, disposal and any changes to drinking-water arrangements. It is also worth checking how the system affects water pressure, flow, warranty conditions and future servicing access.",
          "A good recommendation should distinguish scale prevention from heating-system cleaning and explain the limitations of the option. If the main concern is one appliance, targeted protection may be more appropriate than treating the whole property. If several outlets and appliances are affected, a wider assessment may be justified. The right choice depends on the plumbing layout and priorities of the household.",
        ],
      },
      {
        heading: "When to request an assessment",
        paragraphs: [
          "Arrange professional help when there is an unexplained loss of pressure or flow, recurring blockages, leaking equipment, poor hot-water performance or a fault code. Turn off an appliance if its manufacturer’s instructions tell you to do so, and treat escaping water or signs of an electrical problem as urgent. Never remove a boiler case or attempt work on a gas appliance yourself.",
          "UKB Plumbing can discuss the symptoms, the affected equipment and the property before arranging a visit. Any recommendation should follow an inspection, and the scope and price should be agreed before work begins. For heating sludge, circulation issues or scale-protection options, see our related service page or contact us with the appliance details and postcode.",
        ],
      },
    ],
  },
  {
    slug: "emergency-boiler-breakdown-guide",
    title: "Emergency Boiler Breakdown Guide",
    description: "Safe checks to make when a boiler stops working, warning signs that need urgent help and the information to have ready before calling an engineer.",
    publishedDate: "2026-11-07",
    updatedDate: "2026-11-07",
    readTime: "9 minute read",
    relatedService: { label: "Boiler repair", href: "/services/boiler-repair" },
    sections: [
      {
        heading: "Start with safety",
        paragraphs: [
          "A boiler breakdown is disruptive, but the first priority is safety rather than restoring heat as quickly as possible. If you smell gas, suspect carbon monoxide or feel unwell with symptoms such as headache, dizziness or nausea, leave the property, avoid operating electrical switches and follow the current emergency advice from the National Gas Emergency Service. Do not try to locate or repair a gas leak yourself.",
          "A carbon-monoxide alarm sounding must not be ignored. Ventilate only if it is safe to do so, stop using fuel-burning appliances and get everyone into fresh air. Seek medical advice if anyone has symptoms. Boiler cases and combustion components must only be opened by an appropriately Gas Safe registered engineer whose ID card covers the type of work required.",
        ],
      },
      {
        heading: "Record what happened",
        paragraphs: [
          "Before resetting anything, note the display message, fault code, pressure reading and any unusual sound or smell. Check whether the boiler failed while heating rooms, producing hot water or doing both. If a leak is visible, note where the water appears without removing panels. A photograph of the display and model label can help the engineer prepare for the visit.",
          "Also establish whether the problem affects the whole property. A single cold radiator, one faulty tap or one room thermostat may point to a local control or plumbing issue rather than a complete boiler failure. If both heating and hot water stopped together, the boiler, power supply, controls or system pressure may need attention. Clear information reduces guesswork during the first conversation.",
        ],
      },
      {
        heading: "Safe checks a householder can make",
        paragraphs: [
          "Use the boiler manufacturer’s user instructions and restrict checks to normal controls. Confirm that the boiler has electrical power, the programmer is calling for heat and the thermostat is set above room temperature. Check whether a local power cut or a tripped circuit has affected other equipment. Do not repeatedly reset a circuit breaker or appliance if it trips again.",
          "Look at the pressure gauge only if the instructions explain the normal range. Low pressure is common, but the correct repressurising method differs by model and installation. If you are unsure, if pressure drops again, or if water is leaking, stop and call an engineer. Never improvise a filling procedure or operate valves that are not identified in the user guide.",
        ],
      },
      {
        heading: "Frozen condensate and cold weather",
        paragraphs: [
          "Some condensing boilers stop during freezing weather when an external condensate pipe freezes. The display or manual may identify this fault. Follow only the manufacturer’s published homeowner guidance and never use boiling water, a naked flame or an unsafe ladder. External pipework that cannot be reached safely should be left for a competent person.",
          "A recurring freeze suggests that the condensate route, insulation or pipe size should be reviewed. Restarting the boiler may restore service temporarily, but it does not correct the underlying vulnerability. Ask the attending engineer whether alterations are appropriate and whether they comply with the boiler manufacturer’s instructions.",
        ],
      },
      {
        heading: "Faults that need an engineer",
        paragraphs: [
          "Call for professional help if a reset does not clear the fault, the boiler locks out repeatedly, pressure will not remain stable, water is escaping, controls are unresponsive or unusual banging, grinding or ignition noises continue. Soot, scorching, a damaged flue or changes to the flame on an appliance that exposes one are urgent warning signs and the appliance should not be used.",
          "An engineer may need to test controls, circulation, ignition, combustion, safety devices and the condition of connected components. A displayed code narrows the search but does not prove which part has failed. Replacing parts solely from an online fault-code list can waste money and may create a safety risk. Diagnosis should come before a repair quotation.",
        ],
      },
      {
        heading: "What to tell the repair company",
        paragraphs: [
          "Have the postcode, boiler make and model, fault code, pressure reading and a short history ready. Explain whether vulnerable occupants are without heat, whether water is leaking and whether the fault is intermittent. Mention any recent work, power interruption or change to the heating controls. Access details and parking restrictions can also affect the appointment.",
          "Ask when availability can be confirmed and whether a diagnostic or call-out charge applies. Arrival times depend on engineer availability, travel and the nature of earlier jobs, so an estimate should not be treated as a guarantee. Before repair work starts, ask what has been diagnosed, what the proposed work includes and whether parts must be ordered.",
        ],
      },
      {
        heading: "Reduce the chance of another breakdown",
        paragraphs: [
          "Routine servicing in line with the manufacturer’s instructions can identify wear, unsafe operation and maintenance needs, although it cannot prevent every failure. Keep ventilation openings clear, do not box in the appliance without approved clearances and test carbon-monoxide alarms as their manufacturer directs. Know where the water stop tap and heating controls are before an emergency occurs.",
          "If repair is uneconomical, request a clear comparison between repair and replacement rather than making a rushed decision. Consider the boiler’s condition, parts availability, system requirements and likely future use of the property. UKB Plumbing can assess boiler faults in Southampton and discuss the next step; the scope, charges and timing should be confirmed when the appointment is arranged.",
        ],
      },
    ],
  },
  {
    slug: "preventing-blocked-drains-autumn",
    title: "Preventing Blocked Drains in Autumn",
    description: "Practical autumn checks for gutters, gullies and household drains, plus clear warning signs that a drainage problem needs professional attention.",
    publishedDate: "2026-11-07",
    updatedDate: "2026-11-07",
    readTime: "8 minute read",
    relatedService: { label: "Blocked drains and jetting", href: "/services/blocked-drains" },
    sections: [
      {
        heading: "Why autumn exposes drainage problems",
        paragraphs: [
          "Falling leaves, heavier rain and more time spent indoors can put several parts of a drainage system under pressure at once. Leaves and moss collect in gutters and surface-water gullies, while cooking fats and food waste continue to build up inside kitchen pipework. A restriction that caused no obvious problem in dry weather may show itself when rainfall or household use increases.",
          "Prevention starts with separating external rainwater issues from foul-water drainage. A blocked gutter, a covered gully and a slow kitchen sink can produce similar visible overflow but have different causes. Observe when the problem appears, which fixtures are affected and whether neighbouring properties have the same symptoms before deciding what action is safe.",
        ],
      },
      {
        heading: "Keep leaves away from water routes",
        paragraphs: [
          "Clear loose leaves from accessible ground-level gullies, channel drains and covers before they compact into a wet mat. Wear gloves and dispose of debris rather than pushing it through a grate. Covers and guards may reduce the amount entering a drain, but they still need inspection because fine material can collect underneath them.",
          "Gutter clearing involves work at height and should not be attempted from an unstable ladder or in poor weather. From ground level, look for plants, sagging sections, leaking joints and water spilling behind the gutter. Downpipes that overflow only during rain may be obstructed or may discharge to a gully that is already full. Arrange safe access if the cause cannot be reached from the ground.",
        ],
      },
      {
        heading: "Change what goes down indoor drains",
        paragraphs: [
          "Cooking oil, fat and grease should be cooled and placed in a suitable container for disposal rather than poured into the sink. Even when followed by hot water, grease can cool farther along the pipe and combine with food particles. Use a sink strainer, scrape plates before washing and keep coffee grounds and fibrous food waste out of the drain.",
          "Toilets are designed for human waste and toilet paper. Wipes, sanitary products, nappies, cotton buds and cleaning cloths can snag or remain intact in the system, including products marketed as flushable. In bathrooms, remove hair from accessible shower and basin strainers regularly. These habits cannot prevent structural defects, but they reduce avoidable internal blockages.",
        ],
      },
      {
        heading: "Recognise early warning signs",
        paragraphs: [
          "A fixture that drains more slowly than usual, gurgling after another appliance empties, unpleasant drain smells or water rising in a shower when a toilet flushes can indicate a developing restriction. More than one affected fixture often points to a problem farther along the shared branch or main drain. Record the sequence instead of repeatedly adding chemical cleaner.",
          "Outside, look for a gully that remains full after rain, sewage odour, damp ground or wastewater emerging from a cover. Do not lift a heavy or unsafe inspection cover. Sewage is a health hazard, and flooded areas may conceal openings or electrical risks. Keep children and pets away and avoid contact while arranging suitable assistance.",
        ],
      },
      {
        heading: "Use simple methods carefully",
        paragraphs: [
          "For a minor blockage confined to one basin or sink, a correctly used plunger may help. Block the overflow where appropriate and follow basic hygiene precautions. Stop if connections leak or if several fixtures react together. Dismantling traps can release contaminated water and may damage old fittings, so do not proceed unless you understand the assembly and can isolate the area safely.",
          "Avoid mixing drain chemicals or combining them with bleach, acids or other cleaners. They can cause burns, toxic fumes and damage to pipework, and residual chemicals create a hazard for whoever later opens the system. Tell the drainage engineer about any product already used. Repeated chemical treatment may hide a recurring cause rather than resolving it.",
        ],
      },
      {
        heading: "When investigation is better than repeated clearing",
        paragraphs: [
          "A blockage that returns in the same place may be linked to grease, scale, displaced joints, root entry, a damaged pipe or inadequate falls. Clearing restores flow but does not necessarily show why the restriction formed. Depending on access and condition, an engineer may recommend mechanical cleaning, water jetting or a camera survey after the line is clear.",
          "The appropriate method depends on the pipe material, diameter, access and suspected fault. High-pressure jetting is not automatically suitable for every old or damaged drain. Ask what the proposed work covers and whether further repair would be quoted separately if a structural defect is found. Photos or survey footage can help explain the recommendation.",
        ],
      },
      {
        heading: "Prepare before calling for help",
        paragraphs: [
          "Note the affected fixtures, when the problem began, whether it changes with rain and whether any inspection chamber appears full. Share the property type, access restrictions and any history of repairs. If you rent, contact the landlord or managing agent as required. Responsibility for a shared sewer may lie with the water company, so the location of the blockage matters.",
          "For an active overflow, reduce water use and keep people away from contaminated areas. UKB Plumbing can discuss blocked-drain symptoms in Southampton and the likely first step. Availability, any call-out or diagnostic charge and the proposed cleaning method should be confirmed before attendance, with additional work agreed only after the cause can be assessed.",
        ],
      },
    ],
  },
];

export function getBlogArticle(slug: string) {
  return blogArticles.find((article) => article.slug === slug);
}
