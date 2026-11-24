/* Stores the historical information for all 10 phases */
const phases = [

  // simons Monument
  [
    "proposed",
    "Proposed",

    `Date proposed: Late 1883, shortly after Sims's death.

  Proposed by: His medical colleagues and former patients.

  Organizing institution: The Medical Record, a medical journal.

  Date unveiled: October 20, 1894, in Bryant Park.`
  ],

  [
    "funded",
    "Funded",

    `Who funded it: Individual donors, primarily physicians and other medical professionals.

  Who organized fundraising: The Medical Record and a memorial committee.

  How was it funded: Through voluntary subscriptions and donations collected across the United States and internationally.

  How much did it cost: The statue's granite pedestal reportedly cost $5,000. This was the pedestal cost, not necessarily the total project cost.`
  ],

  [
    "created",
    "Created",

    `Artist/sculptor: Ferdinand von Miller II.

  Date created/cast: 1892, in Munich, Germany.

  Date publicly unveiled: October 20, 1894, in Bryant Park, Manhattan.

  Pedestal architect: Aymar Embury II, who designed the pedestal separately from the sculpture.`
  ],

  [
    "celebrated",
    "Celebrated",

    `The medical community: Physicians and medical professionals supported Sims's reputation as a pioneer in gynecology. Nearly 1,000 medical professionals contributed to the original fundraising campaign for his statue.

  The statue's original memorial organizers: The Medical Record and the Sims memorial committee promoted the creation of a public monument in his honor, reflecting the medical profession's recognition of his work.

  Medical institutions: The New York Academy of Medicine historically recognized Sims's contributions to medicine, including inviting him to lecture.

  Public authorities who permitted its installation: The statue was installed in public space with municipal approval. This demonstrates institutional acceptance of the memorial, although approval alone does not establish that every city official supported Sims personally.`
  ],

  [
    "contested",
    "Contested",

    `Viola Plummer and East Harlem Preservation: Activist Viola Plummer helped bring renewed attention to Sims's legacy in 2006. East Harlem Preservation subsequently advocated for the statue's removal, arguing that it was inappropriate to honor Sims in the neighborhood.

  Black Youth Project 100 (BYP100): The activist organization participated in protests calling for the statue's removal, challenging the public celebration of Sims's medical legacy at the expense of the enslaved women he experimented on.

  Elected officials: NYC Council Speaker Melissa Mark-Viverito, U.S. Representative Adriano Espaillat, and other elected officials publicly demanded the statue's removal in August 2017. City Council members Robert Cornegy and Mark Levine also supported removing it.

  Community Board 11 and East Harlem residents: Community Board 11 and local residents opposed keeping the statue, including rejecting a proposal to address the controversy simply by adding a contextual plaque. Their position emphasized that the monument itself continued to honor Sims.

  A broader community coalition: El Museo del Barrio, the New York Academy of Medicine, and other cultural and community organizations later participated in efforts to develop a replacement artwork that addressed racism and inequities in reproductive health.`
  ],

  [
    "renamed",
    "Renamed",

    `Was it renamed: No.

  The J. Marion Sims monument was never officially renamed. Despite growing controversy surrounding Sims's medical experiments on enslaved Black women, the statue retained its original name until its removal in 2018.`
  ],

  [
    "removed",
    "Removed",

    `Date removed: April 17, 2018.

  Reason for removal: Years of community advocacy and New York City's review of controversial public monuments.

  Decision-makers: Mayor Bill de Blasio and the NYC Public Design Commission.

  New location: Green-Wood Cemetery, Brooklyn.`
  ],

  [
    "destroyed",
    "Destroyed",

    `Was it destroyed: No.

  The J. Marion Sims monument was not destroyed. Following its removal from East Harlem on April 17, 2018, the statue was relocated to Green-Wood Cemetery in Brooklyn.

  Although the monument was removed from public display in East Harlem, the physical sculpture was preserved.`
  ],
  [
    "reinterpreted",
    "Reinterpreted",

    `Artist: Vinnie Bagwell.

  Date selected: October 2019.

  New monument: Victory Beyond Sims, an approved 18-foot bronze design featuring a winged angel holding an eternal flame and the Staff of Asclepius, with bas-reliefs honoring enslaved Black women, including Anarcha, Lucy, and Betsey.

  Purpose: To create a new monument that reframes the site's history and recognizes the experiences and contributions of women of color.

  Approach: Replace the singular celebration of Sims with a new artistic narrative emphasizing healing, equity, and historical reckoning.`
  ],

  [
    "forgotten",
    "Forgotten",

    `Forgotten?: Partially / contested.

  Why?: The statue's original commemorative narrative largely omitted the experiences of the enslaved women on whom Sims experimented. The statue's removal also took his image out of a prominent public location.

  Was history erased?: No. Public debate, news coverage, historical research, and the Beyond Sims initiative kept the history in public discussion.

  What remains uncertain?: How much the general public knows about Sims, the women he experimented on, and the statue's history today.`
  ],
];

/* Stores the information for each monument */
const monuments = {
  sims: {
    image: "image/sims.jpeg",
    phases: phases
  },

  roosevelt: {
    image: "image/roosevelt.jpeg",
    phases: [

      // teddy rosevelt Monument
      [
        "proposed",
        "Proposed",

        `Date proposed: 1919, following Theodore Roosevelt's death.

      Proposed by: Henry Fairfield Osborn, president of the American Museum of Natural History.

      Purpose: To honor Roosevelt's legacy as a naturalist, explorer, and conservationist.

      Organizing institution: The New York State Legislature established the Roosevelt Memorial Commission in 1920 to advance the project.

      Artists commissioned: Architect John Russell Pope was selected to design the memorial, and sculptor James Earle Fraser was commissioned to create the equestrian statue.`
      ],

      [
        "funded",
        "Funded",

        `Who commissioned it: The Theodore Roosevelt statue was commissioned as part of the New York State Roosevelt Memorial.

      Organizing institution: The New York State Roosevelt Memorial Commission.

      Historical documentation: The American Museum of Natural History provides records of the commissioning process.`
      ],

      [
        "created",
        "Created",

        `Artist/sculptor: James Earle Fraser.

      Date created: 1939.

      Date publicly unveiled: October 27, 1940, outside the American Museum of Natural History (AMNH) in New York City.

      Statue description: Roosevelt is depicted on horseback, flanked by two figures representing an Indigenous American and an African man.

      Larger memorial: The statue was part of the New York State memorial to Roosevelt, which also included the museum's façade and Theodore Roosevelt Memorial Hall.`
      ],

      [
        "celebrated",
        "Celebrated",

        `Henry Fairfield Osborn: President of the American Museum of Natural History (1908–1933) and chair of the New York State Roosevelt Memorial Commission. He advocated for the memorial because of Roosevelt's ties to the museum and his interest in natural history and science.

      New York State officials and the Roosevelt Memorial Commission: Established the commission in 1920 and advanced the memorial to honor Roosevelt as a naturalist, explorer, and author.

      The American Museum of Natural History: Historically celebrated Roosevelt's contributions to natural history, exploration, and conservation. Although the museum requested the statue's removal in 2020, it continues to interpret Roosevelt's legacy through its memorial spaces.

      Conservation advocates and historians: Recognize Roosevelt's conservation legacy, including his expansion of protected lands. Historian Douglas Brinkley has emphasized his contributions to American conservation history.`
      ],


      [
        "contested",
        "Contested",

        `.    Decolonize This Place: Organized the October 2016 Anti-Columbus Day Tour and protest at the American Museum of Natural History. Protesters covered the statue with material and challenged the museum's colonial narratives and representations of Indigenous and African people.

      Indigenous activists and organizations: Activists, including Janice Kekahbah of the National Indian Youth Council, challenged the statue's portrayal of Indigenous people as subordinate to Roosevelt and connected its imagery to settler colonialism.

      Monument Removal Brigade: Splashed red paint on the statue's base in October 2017, describing the action as public-art criticism and calling for removal because of the monument's racial hierarchy and colonial imagery.

      Artists and scholars: Andrew Ross, Mabel O. Wilson, and other critics challenged the statue's racial hierarchy. More than 120 artists and scholars signed a 2017 open letter calling for the removal of racist monuments in New York City.`
      ],

      [
        "renamed",
        "Renamed",
        `Was it renamed: No.

      The Theodore Roosevelt equestrian statue was never officially renamed. Despite growing controversy surrounding its representation of Indigenous and African people, the monument retained its original name until its removal from the American Museum of Natural History in 2022.`
      ],

      [
        "removed",
        "Removed",

        `Was it removed: Yes.

    Date removed: January 2022.

    Original location: Outside the American Museum of Natural History (AMNH) in New York City.`
      ],

      [
        "destroyed",
        "Destroyed",

        `Was it destroyed: No.

   What happened to it: The Theodore Roosevelt statue was removed from the American Museum of Natural History in January 2022 but was not destroyed.

   Relocation arrangement: The statue was designated for relocation under a long-term loan agreement with the Theodore Roosevelt Presidential Library in North Dakota.`
      ],

      [
        "reinterpreted",
        "Reinterpreted",

        `Was it reinterpreted: Yes, through a different representation of Roosevelt inside the museum.

    Alternative sculpture: A bronze sculpture in the Theodore Roosevelt Memorial Hall depicts Roosevelt sitting casually on a bench, with an empty space inviting visitors to sit beside him.

    Difference in representation: The original equestrian statue, designed by James Earle Fraser, presents Roosevelt as a larger-than-life figure on horseback, elevated above two accompanying figures. In contrast, the seated sculpture portrays Roosevelt as a more approachable, human figure.`
      ],

      [
        "forgotten",
        "Forgotten",

        `Was it forgotten: No.

       Why not: The Theodore Roosevelt statue continues to be remembered through historical research, public protests, museum interpretation, and discussions surrounding its removal.

       What remains: Although the statue was removed from its prominent public location in 2022, its history continues to raise questions about racial representation, colonialism, and who should be commemorated in public spaces.`
      ]
    ]
  },

  // Christopher Columbus Monument
  columbus: {
    image: "image/Columbus.jpeg",
    phases: [
      [
        "proposed",
        "Proposed",

        `Date proposed: 1889.

        Proposed by: Carlo Barsotti.

        Date unveiled: October 12, 1892.

        Purpose: To commemorate Christopher Columbus and celebrate Italian American identity and contributions in New York City.`
      ],

      [
        "funded",
        "Funded",

        `Primary funders: Italian American immigrants and community members in the United States.

        Fundraising organizer: Carlo Barsotti, publisher of Il Progresso Italo-Americano.

        Additional contributor: The Italian government.

        Fundraising method: Public subscriptions and donations collected through the newspaper's campaign.

        Community contribution: Italian American volunteers also provided labor to help prepare the monument's site.

        Date dedicated: October 12, 1892.`
      ],
      [
        "created",
        "Created",

        `Sculptor: Gaetano Russo, a Sicilian-born sculptor who designed the monument in Italy.

        Organized by: Carlo Barsotti, publisher of Il Progresso Italo-Americano.

        Date unveiled: October 12, 1892.

        Location: Columbus Circle, southwest corner of Central Park, Manhattan.

        Why was it created?

        1. Commemoration: To mark the 400th anniversary of Columbus's 1492 voyage to the Americas.

        2. Italian American identity: To celebrate Italian American heritage and assert the community's belonging in NYC during a period of discrimination.

        Historical significance: While the monument celebrated Italian American identity and civic inclusion, its heroic depiction of Columbus also reflected narratives that minimized the violence and consequences of European colonization for Indigenous peoples.`
      ],
      [
        "celebrated",
        "Celebrated",

        `Who celebrates and supports the monument?

        • Italian American community: Celebrates the monument as a symbol of heritage, pride, and belonging since its 1892 dedication.

        • National Italian American Foundation (NIAF): Defended the statue in 2017–2018, emphasizing Italian American history and the struggle for acceptance.

        • Columbus Heritage Coalition: Advocates for preserving the statue and maintaining Columbus Day traditions.

        • Public officials: Governor Andrew Cuomo supported keeping the statue in 2017–2018. Mayor Bill de Blasio's advisory commission recommended retaining it.

        Why is it celebrated?

        • Italian American identity: Represents cultural heritage and the struggle for social acceptance.

        • Civic belonging: Recognizes Italian Americans' contributions to New York City.

        • Columbus Day: Symbolizes the holiday and its cultural celebrations.`
      ],
      [
        "contested",
        "Contested",

        `Who contested the monument?

        • Indigenous rights activists and allies: Opposed honoring Columbus because of the violence, enslavement, and dispossession of Indigenous peoples associated with European colonization.

        • Decolonize This Place: Anti-colonial organizers challenged Columbus Day celebrations and advocated for greater recognition of Indigenous histories in public spaces.

        • Scholars and historians: Tom Angotti, an Italian American professor at Hunter College, argued that NYC should instead honor Italian Americans who fought for equality.

        • Artists and scholars: In 2017, more than 120 artists and scholars, including Claire Bishop, Lucy Lippard, and Hal Foster, signed a letter calling for the statue's removal.

        Why was it contested?

        • Colonial legacy: Critics argued that celebrating Columbus overlooked the violence and consequences of European colonization.

        • Public representation: Opponents questioned whose histories were being honored and whose experiences were being excluded.

        What happened after the protests?

        • January 2018 decision: Mayor Bill de Blasio's Mayoral Advisory Commission recommended keeping the monument in place while encouraging further public interpretation and dialogue. The statue was not removed.`
      ],
      [
        "renamed",
        "Renamed",

        `Was it renamed: No.

        The Christopher Columbus monument has not been officially renamed. Despite ongoing debates about its appropriateness, the statue retains its original name.`
      ],
      [
        "removed",
        "Removed",

        `Was it removed: No.

        The Christopher Columbus monument remains in its original location at Columbus Circle in Manhattan. While there have been calls for its removal, it has not been taken down.`
      ],
      [
        "destroyed",
        "Destroyed",

        `Was it destroyed: No.

        The Christopher Columbus monument has not been destroyed. It continues to stand in its original location at Columbus Circle.`
      ],
      [
        "reinterpreted",
        "Reinterpreted",

        `Was it reinterpreted: Proposals were made, but the monument itself was not physically altered.

        • Historical context: Mayor Bill de Blasio proposed adding interpretive texts explaining both Columbus's accomplishments and the harmful consequences of his legacy.

        • Historical accuracy: Supporters of reinterpretation advocated for a more complete understanding of Columbus and the effects of European colonization on Indigenous peoples.

        • Indigenous Peoples monument: NYC commissioned a separate monument intended to recognize Indigenous histories and serve as a counter-commemoration.

        • Status as of 2018: The city had not determined an exact location for the proposed Indigenous Peoples monument.

        • Status as of 2020: The provided research reported no further news about its installation.`
      ],
      [
        "forgotten",
        "Forgotten",

        `Was it forgotten: No.

        Why not: The Christopher Columbus monument continues to be remembered and debated through public discourse, historical research, and ongoing discussions about its appropriateness in contemporary society.

        What remains: The statue remains a focal point for discussions about Italian American heritage, colonial legacies, and the representation of historical figures in public spaces.`
      ]
    ]
  },
  // Marsha Monument
  marsha: {
    image: "image/Marsha.jpeg",
    phases:
      [
        [
          "proposed",
          "Proposed",

          `When was it first proposed?

        • 1980s: Activist Randy Wicker circulated petitions calling for a memorial honoring Marsha P. Johnson in the West Village.

        • 2019: New York City announced plans for an official monument honoring Marsha P. Johnson and fellow transgender activist Sylvia Rivera.

        • Project delays: The city's proposed monument stalled, despite decades of community advocacy.

        • Community-led response: Transgender activists organized their own memorial rather than continuing to wait for the city.

        Why was it proposed?

        • To honor Marsha P. Johnson's legacy and recognize transgender activism and LGBTQ+ history in New York City's public spaces.`
        ],

        [
          "funded",
          "Funded",

          `Who funded the monument?

        • Primary funding: Sculptor Jesse Pallotta reported using $6,000 of his own money to create the bust.

        • Community-led project: The monument was organized independently by transgender activists and artists rather than commissioned by New York City.

        • Project organizers: Activist Eli Erlick, sculptor Jesse Pallotta, and fellow community organizers collaborated to create and install the memorial.

        • City involvement: NYC Parks did not initially authorize or commission the installation.

        • Fundraising method: The available reporting does not establish a formal public fundraising campaign for this sculpture.`
        ],
        [
          "created",
          "Created",

          `When was it created?

        • Date created: 2021.

        • Date installed: August 24, 2021, on what would have been Marsha P. Johnson's 76th birthday.

        • Artist: Jesse Pallotta.

        • Materials: Bronze bust on a pedestal, designed with holes to hold flowers.

        • Original location: Christopher Park, across from the Stonewall Inn in Manhattan.

        Why was it created?

        • LGBTQ+ recognition: To honor Marsha P. Johnson's contributions to LGBTQ+ activism and history.

        • Transgender representation: To address the lack of public monuments recognizing transgender people, particularly Black transgender women.

        • Community response: The installation expressed frustration with delays in NYC's promised official monument project.`
        ],
        [
          "celebrated",
          "Celebrated",

          `Who celebrated and supported the monument?

        • Transgender activists and LGBTQ+ community: Supported the community-led installation as a way to honor Marsha P. Johnson's legacy.

        • Eli Erlick and project organizers: Advocated for greater transgender representation in public monuments.

        • LGBT Community Center: Hosted the sculpture in 2022, providing another space for the community to engage with it.

        How was it celebrated?

        • Community participation: Visitors were invited to place flowers in the sculpture's hair and around its pedestal.

        • Public tribute: The monument became a place to recognize Johnson's contributions to LGBTQ+ activism.

        Why was it celebrated?

        • Transgender visibility: The sculpture represented the importance of recognizing transgender history in public spaces.

        • Community recognition: It celebrated Johnson's legacy while highlighting the need for more inclusive public memorials.`
        ],
        [
          "contested",
          "Contested",

          `Was the monument contested?

        • Direct opposition: No well-documented organized opposition specifically targeting A Love Letter to Marsha has been identified.

        • Unauthorized installation: The sculpture was installed without official city approval, placing it outside the traditional public-art commissioning process.

        What was the broader controversy?

        • Delayed city memorial: The project responded to delays in NYC's promised monument honoring Marsha P. Johnson and Sylvia Rivera.

        • Public representation: Activists questioned why transgender people, particularly transgender people of color, remained underrepresented in public monuments.

        • Gay Liberation sculpture: Some community members criticized George Segal's existing monument for not adequately representing transgender people of color central to Stonewall's history.

        • Institutional decision-making: The project raised questions about who has the authority to decide which histories are commemorated in public spaces.`
        ],
      [
        "renamed",
        "Renamed",

        `Was it renamed: No.

        • Original title: A Love Letter to Marsha.

        • Official status: The sculpture has not been renamed and continues to be recognized by its original title.

        • Meaning behind the title: The name reflects the affection, care, and admiration Marsha P. Johnson inspired among friends and community members.`

      ],
      [
       "removed",
        "Removed",

        `Was the monument removed: Yes.

        • Original installation: The bust was installed in Christopher Park in August 2021.

        • Temporary permission: The sculpture later received temporary permission to remain in the park.

        • Removal: The bust was moved from Christopher Park in 2022.

        • New location: Beginning in May 2022, the sculpture was displayed at the LGBT Community Center in New York City.

        What happened afterward?

        • Continued recognition: Although removed from its original location, the sculpture continued to honor Marsha P. Johnson and her contributions to LGBTQ+ history.`
      ],
      [
        "destroyed",
        "Destroyed",

        `Was the monument destroyed? No.

        • Preservation: The sculpture was relocated rather than destroyed.

        • New location: The bust was preserved and exhibited at the LGBT Community Center beginning in May 2022.

        • Community engagement: Visitors could continue interacting with the sculpture and leaving flowers.

        What happened afterward?

        • Relocation, not destruction: Its removal from Christopher Park should be understood as a relocation rather than the loss of the artwork.

        • Separate city project: This sculpture is different from NYC's proposed permanent monument honoring Marsha P. Johnson and Sylvia Rivera.

        • Official plans: In 2024, NYC announced its intention to revive the separate city monument project, with further plans to follow.`
      ],
      [
        "reinterpreted",
        "Reinterpreted",

        `How has the monument's meaning changed?

        • Community-led intervention (2021): Its unauthorized installation challenged delays and barriers surrounding official public commemoration.

        • Public tribute in Christopher Park (2021): Located near the Stonewall Inn, the sculpture connected Marsha P. Johnson's legacy to LGBTQ+ resistance and activism.

        • Community and cultural memorial (2022 onward): Its relocation to the LGBT Community Center provided a setting for education, gathering, and reflection.

        What remained the same?

        • Honoring Johnson's legacy: Despite its relocation, the sculpture continued to recognize Marsha P. Johnson's contributions to LGBTQ+ history.

        • Black transgender representation: The monument continued to affirm the importance of recognizing Black transgender history in public and cultural spaces.`
      ],
      [
        "forgotten",
        "Forgotten",

        `Was the monument forgotten? No.

        • Continued recognition: There is no clear evidence that A Love Letter to Marsha was forgotten.

        • Change in visibility: Its relocation removed the sculpture from its highly visible public setting across from the Stonewall Inn.

        • Community engagement: The sculpture continued to be exhibited at the LGBT Community Center, where it remained connected to educational and cultural programming.

        What does its relocation represent?

        • Changing context: Moving the sculpture from Christopher Park to the LGBT Community Center changed how and where visitors encountered it.

        • Preservation of memory: Its relocation represents a change in public visibility rather than evidence that Marsha P. Johnson's legacy or the sculpture was forgotten.`
      ]
    ]
  }
};

/* Stores the research sources for each monument */
const monumentSources = {
  sims: [
    {
      title: "J. Marion Sims Monument — Source 1",
      url: "PASTE-SIMS-SOURCE-URL-HERE"
    },
    {
      title: "J. Marion Sims Monument — Source 2",
      url: "PASTE-SIMS-SOURCE-URL-HERE"
    }
  ],

  roosevelt: [
    {
      title: "Theodore Roosevelt Monument — Source 1",
      url: "PASTE-ROOSEVELT-SOURCE-URL-HERE"
    },
    {
      title: "Theodore Roosevelt Monument — Source 2",
      url: "PASTE-ROOSEVELT-SOURCE-URL-HERE"
    }
  ],

  columbus: [
    {
      title: "Christopher Columbus Monument — Source 1",
      url: "PASTE-COLUMBUS-SOURCE-URL-HERE"
    },
    {
      title: "Christopher Columbus Monument — Source 2",
      url: "PASTE-COLUMBUS-SOURCE-URL-HERE"
    }
  ],
  marsha: [
    {
      title: "Love Letter to Marsha P. Johnson — Source 1",
      url: "PASTE-MARSHA-SOURCE-URL-HERE"
    },
    {
      title: "Love Letter to Marsha P. Johnson — Source 2",
      url: "PASTE-MARSHA-SOURCE-URL-HERE"
    }
  ]
};

/* Connects JavaScript to the HTML elements */
const cards = document.getElementById("phase-cards");
const svg = document.querySelector(".arrows");
const clearButton = document.getElementById("clear-all");

/* Connects the monument dropdown and photograph */
const monumentSelect = document.getElementById("monument-select");
const monumentImage = document.querySelector(".monument img");

/* Connects the sources section to JavaScript */
const sourcesList = document.getElementById("sources-list");
const sourcesMonumentTitle = document.getElementById("sources-monument-title");

/* Displays sources for the selected monument */
function updateSources() {
  const selected = monumentSelect.value;

  // Shows the monument name
  sourcesMonumentTitle.textContent =
    monumentSelect.options[monumentSelect.selectedIndex].text;

  // Removes sources from the previous monument
  sourcesList.innerHTML = "";

  // Adds sources for the current monument
  (monumentSources[selected] || []).forEach(source => {
    const item = document.createElement("li");
    const link = document.createElement("a");

    link.href = source.url;
    link.textContent = source.title;
    link.target = "_blank";
    link.rel = "noopener noreferrer";

    item.appendChild(link);
    sourcesList.appendChild(item);
  });
}

/* Remembers which phases are selected */
const visible = new Set();

/* Defines the SVG drawing system */
const svgNS = "http://www.w3.org/2000/svg";


/* Updates the diagram when phases are selected */
function renderDiagram() {

  // Removes old cards and arrows
  cards.innerHTML = "";

  svg.querySelectorAll(".phase-arrow")
    .forEach(arrow => arrow.remove());

  // Finds the selected phases for the current monument
  const currentMonument = monuments[monumentSelect.value];

  const selectedPhases = currentMonument.phases.filter(phase =>
    visible.has(phase[0])
  );

  const total = selectedPhases.length;


  // Arranges cards in two columns around the monument
  const positions = [];

  selectedPhases.forEach((phase, index) => {
    let x, y;

    if (total === 1) {
      x = 500;
      y = 120;
    } else {
      const isLeft = index % 2 === 0;
      const row = Math.floor(index / 2);

      x = isLeft ? 140 : 860;
      y = 100 + row * 190;
    }

    positions.push([x, y]);
  });


  // Creates a card for each selected phase
  selectedPhases.forEach((phase, index) => {
    const [id, title, description] = phase;
    const [cardX, cardY] = positions[index];

    // Center of the diagram
    const cx = 500;
    const cy = 500;

    // Creates the information card
    const card = document.createElement("div");
    card.className = "phase-card";

    // Gives each phase card its own color category
    card.classList.add(id);

    // Positions the card
    card.style.left = `${cardX / 10}%`;
    card.style.top = `${cardY / 10}%`;

    // Adds the phase title and description
    const heading = document.createElement("h3");
    heading.textContent = title;

    const paragraph = document.createElement("p");

    // Bolds the labels before each colon
    const lines = description.split("\n");

    lines.forEach((line, index) => {
      const colonIndex = line.indexOf(":");

      if (colonIndex !== -1) {
        const bold = document.createElement("strong");
        bold.textContent = line.slice(0, colonIndex + 1);

        paragraph.appendChild(bold);
        paragraph.appendChild(
          document.createTextNode(line.slice(colonIndex + 1))
        );
      } else {
        paragraph.appendChild(document.createTextNode(line));
      }

      if (index < lines.length - 1) {
        paragraph.appendChild(document.createTextNode("\n"));
      }
    });

    card.append(heading, paragraph);
    cards.appendChild(card);


    // Measures the diagram and phase card
    const diagram = document.querySelector(".diagram");
    const diagramRect = diagram.getBoundingClientRect();
    const cardRect = card.getBoundingClientRect();

    const scaleX = 1000 / diagramRect.width;
    const scaleY = 1000 / diagramRect.height;

    // Finds the actual card boundaries
    const left = (cardRect.left - diagramRect.left) * scaleX;
    const right = (cardRect.right - diagramRect.left) * scaleX;
    const top = (cardRect.top - diagramRect.top) * scaleY;
    const bottom = (cardRect.bottom - diagramRect.top) * scaleY;

    // Finds the actual center of the phase card
    const actualCardX = (left + right) / 2;
    const actualCardY = (top + bottom) / 2;

    // Calculates the direction toward the card
    const dx = actualCardX - cx;
    const dy = actualCardY - cy;
    const angle = Math.atan2(dy, dx);

    const directionX = Math.cos(angle);
    const directionY = Math.sin(angle);

    // Sets where the arrow begins
    const startDistance = 145;
    const startX = cx + startDistance * directionX;
    const startY = cy + startDistance * directionY;


    // Finds where the arrow reaches the card's border
    const halfWidth = (right - left) / 2;
    const halfHeight = (bottom - top) / 2;

    // Calculates the distance from the monument to the card
    const distanceToCard = Math.hypot(dx, dy);

    // Finds where the arrow intersects the card's edge
    const distanceToEdge = Math.min(
      halfWidth / Math.max(Math.abs(directionX), 0.0001),
      halfHeight / Math.max(Math.abs(directionY), 0.0001)
    );

    // Keeps the arrowhead just outside the card
    const gap = 2;

    const endX = actualCardX - directionX * (distanceToEdge + gap);
    const endY = actualCardY - directionY * (distanceToEdge + gap);

    // Draws a thicker black line behind the white arrow
    const outline = document.createElementNS(svgNS, "line");

    outline.setAttribute("class", "phase-arrow");
    outline.setAttribute("x1", startX);
    outline.setAttribute("y1", startY);
    outline.setAttribute("x2", endX);
    outline.setAttribute("y2", endY);
    outline.setAttribute("stroke", "black");
    outline.setAttribute("stroke-width", "6");

    svg.appendChild(outline);
    // Draws the connecting arrow line
    const arrow = document.createElementNS(svgNS, "line");

    arrow.setAttribute("class", "phase-arrow");
    arrow.setAttribute("x1", startX);
    arrow.setAttribute("y1", startY);
    arrow.setAttribute("x2", endX);
    arrow.setAttribute("y2", endY);
    arrow.setAttribute("stroke", "white");
    arrow.setAttribute("stroke-width", "3");

    svg.appendChild(arrow);


    // Creates the arrowhead
    const arrowHead = document.createElementNS(svgNS, "path");

    const arrowSize = 15;

    const leftX = endX - arrowSize * Math.cos(angle - Math.PI / 6);
    const leftY = endY - arrowSize * Math.sin(angle - Math.PI / 6);

    const rightX = endX - arrowSize * Math.cos(angle + Math.PI / 6);
    const rightY = endY - arrowSize * Math.sin(angle + Math.PI / 6);

    // Defines the arrowhead shape
    arrowHead.setAttribute(
      "d",
      `M ${leftX} ${leftY} L ${endX} ${endY} L ${rightX} ${rightY}`
    );

    // Styles the arrowhead
    arrowHead.setAttribute("fill", "none");
    arrowHead.setAttribute("stroke", "white");
    arrowHead.setAttribute("stroke-width", "4");
    arrowHead.setAttribute("stroke-linejoin", "round");
    arrowHead.setAttribute("class", "phase-arrow");

    // Adds a black outline behind the white arrowhead
    const arrowHeadOutline = arrowHead.cloneNode(true);

    arrowHeadOutline.setAttribute("stroke", "black");
    arrowHeadOutline.setAttribute("stroke-width", "7");

    svg.appendChild(arrowHeadOutline);

    svg.appendChild(arrowHead);
  });
}

/* Connects the dropdown menu to JavaScript */
const phaseSelect = document.getElementById("phase-select");

// Adds check marks next to phases that have already been opened
function updatePhaseCheckmarks() {
  Array.from(phaseSelect.options).forEach(option => {
    const phase = option.value.trim().toLowerCase();

    if (phase === "") return;

    if (!option.dataset.originalLabel) {
      option.dataset.originalLabel = option.textContent.trim();
    }

    const label = visible.has(phase)
      ? "✓ " + option.dataset.originalLabel
      : option.dataset.originalLabel;

    option.textContent = label;
    option.label = label;
  });
}


/* Displays the selected phase */
function showSelectedPhase() {
  const selectedPhase = phaseSelect.value.trim().toLowerCase();

  if (selectedPhase !== "") {
    visible.add(selectedPhase);
  }

  renderDiagram();
  updatePhaseCheckmarks();
}

/* Updates the diagram when the dropdown changes */
phaseSelect.addEventListener("change", showSelectedPhase);


/* Removes all selected phases when Clear All is clicked */
clearButton.addEventListener("click", () => {
  visible.clear();
  phaseSelect.value = "";
  renderDiagram();
  updatePhaseCheckmarks();
});

/* Changes the monument and clears previous phase cards */
function changeMonument() {
  const selectedMonument = monuments[monumentSelect.value];


  // Changes the monument photograph
  monumentImage.src = selectedMonument.image;

  // Clears the previous monument's phases
  visible.clear();
  phaseSelect.value = "";

  // Updates the diagram
  renderDiagram();

  updatePhaseCheckmarks();

  // Updates the sources for the selected monument
  updateSources();
}

/* Updates the website when a new monument is selected */
monumentSelect.addEventListener("change", changeMonument);

/* Displays any selected phase when the page loads */
showSelectedPhase();

/* Displays sources for the first monument when the page loads */
updateSources();
/* Keeps arrows aligned when the window changes size */
window.addEventListener("resize", renderDiagram);
