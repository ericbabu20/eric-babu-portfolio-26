/**
 * PHOTOGRAPHY & FILM
 * ------------------
 * Only add work that is genuinely yours. Nothing here is a placeholder, and
 * The homepage section links to the /photography page and previews up to 3
 * photographs marked `featured`. The page itself shows every photograph,
 * using `span` to vary the width. Empty "Coming soon" frames appear only
 * when the list is empty.
 *
 * HOW TO ADD YOUR 10 PHOTOGRAPHS (step by step)
 *
 *   1. Put your image files in the folder  public/creative
 *      (JPG or WebP, ideally under 2000px on the longest side).
 *      Short file names with no spaces work best, e.g. harbour-dawn.jpg
 *
 *   2. Find out each picture's size in pixels.
 *      On a Mac: right-click the file > Get Info > More Info > Dimensions.
 *
 *   3. Copy the TEMPLATE below into the `photos` list further down,
 *      then replace the three things on each line:
 *         - src:    "/creative/your-file-name.jpg"
 *         - alt:    a plain sentence describing what the photo shows
 *                   (for people using screen readers)
 *         - width / height: the real pixel size from step 2
 *      If you have fewer than 10 photos, delete the lines you do not need.
 *      Do not leave any line that points to a file that does not exist.
 *
 *   4. Save. Each photo replaces one "Coming soon" frame on /photography,
 *      keeping its original proportions.
 *
 * TEMPLATE (copy these 10 lines into `photos: [ ... ]`):
 *
 *   { src: "/creative/photo-01.jpg", alt: "Describe photo 1", width: 1600, height: 1067 },
 *   { src: "/creative/photo-02.jpg", alt: "Describe photo 2", width: 1600, height: 1067 },
 *   { src: "/creative/photo-03.jpg", alt: "Describe photo 3", width: 1600, height: 1067 },
 *   { src: "/creative/photo-04.jpg", alt: "Describe photo 4", width: 1600, height: 1067 },
 *   { src: "/creative/photo-05.jpg", alt: "Describe photo 5", width: 1600, height: 1067 },
 *   { src: "/creative/photo-06.jpg", alt: "Describe photo 6", width: 1600, height: 1067 },
 *   { src: "/creative/photo-07.jpg", alt: "Describe photo 7", width: 1600, height: 1067 },
 *   { src: "/creative/photo-08.jpg", alt: "Describe photo 8", width: 1600, height: 1067 },
 *   { src: "/creative/photo-09.jpg", alt: "Describe photo 9", width: 1600, height: 1067 },
 *   { src: "/creative/photo-10.jpg", alt: "Describe photo 10", width: 1600, height: 1067 },
 *
 * (width 1600 / height 1067 is just an example for a landscape photo. Use
 * each photo's real numbers, e.g. 1067 by 1600 for a portrait photo.)
 *
 * FILM
 *   - A video file in public/creative: set `film` to
 *       { kind: "file", title: "Name of the film", src: "/creative/film.mp4" }
 *     It shows with controls and never plays by itself.
 *   - A film hosted elsewhere: set `film` to
 *       { kind: "link", title: "Name of the film", url: "https://..." }
 *
 * LINK TO MORE WORK
 *   `portfolioUrl` adds a "View my creative work" button. Only add a
 *   web address you have checked opens correctly.
 */

export interface CreativePhoto {
  /** Path under /public, e.g. "/creative/harbour-dawn.jpg". */
  src: string;
  /** Describes what the photograph shows. Required. */
  alt: string;
  /** Real pixel size of the file. */
  width: number;
  height: number;
  /**
   * How many columns the photograph uses on desktop, out of 12.
   * Portraits sit in a narrower column. Wide frames use the full row.
   */
  span?: 4 | 5 | 6 | 7 | 12;
  /** Shown in the homepage preview. At most three are used. */
  featured?: boolean;
}

export type CreativeFilm =
  | { kind: "file"; title: string; src: string; poster?: string }
  | { kind: "link"; title: string; url: string };

export interface CreativeWork {
  photos: CreativePhoto[];
  film?: CreativeFilm;
  portfolioUrl?: string;
}

export const creativeWork: CreativeWork = {
  photos: [
    {
      src: "/creative/westminster-bridge.png",
      alt: "People crossing Westminster Bridge toward the Palace of Westminster and Elizabeth Tower, with a red double-decker bus on the road.",
      width: 1012,
      height: 669,
      span: 12,
      featured: true,
    },
    {
      src: "/creative/sunset-wave.png",
      alt: "A wave breaking into spray against an orange sunset.",
      width: 766,
      height: 915,
      span: 7,
    },
    {
      src: "/creative/old-city-street.jpg",
      alt: "A woman in a black niqab and a boy in school uniform walking down a sunlit street toward an arched gateway.",
      width: 743,
      height: 983,
      span: 5,
    },
    {
      src: "/creative/forest-waterfall.png",
      alt: "A person sitting beside a waterfall in a dense forest, photographed in black and white.",
      width: 951,
      height: 653,
      span: 12,
      featured: true,
    },
    {
      src: "/creative/mist-canoe.png",
      alt: "Two people in a narrow boat on a still, foggy lake, photographed in black and white.",
      width: 801,
      height: 961,
      span: 4,
    },
    {
      src: "/creative/harbour-boats.png",
      alt: "Two fishing boats heading out under a pink evening sky.",
      width: 591,
      height: 695,
      span: 4,
    },
    {
      src: "/creative/two-swans.png",
      alt: "Two swans on dark water in front of a black treeline.",
      width: 915,
      height: 548,
      span: 4,
    },
    {
      src: "/creative/long-exposure-shore.png",
      alt: "Long-exposure waves washing over rocks along a shoreline, photographed in black and white.",
      width: 1013,
      height: 523,
      span: 12,
    },
    {
      src: "/creative/night-bridge.png",
      alt: "A lit bridge reflected in a river under a deep blue dusk sky.",
      width: 1019,
      height: 619,
      span: 7,
    },
    {
      src: "/creative/lake-dive.png",
      alt: "A person's legs above the water as they dive into a lake, with trees on the far shore.",
      width: 1006,
      height: 951,
      span: 5,
    },
    {
      src: "/creative/beach-silhouette.png",
      alt: "A person standing on a beach, silhouetted against an orange and purple sunset.",
      width: 1010,
      height: 515,
      span: 12,
      featured: true,
    },
    {
      src: "/creative/open-arms.png",
      alt: "A person standing in the sea with arms open, framed by dark tree branches, photographed in black and white.",
      width: 767,
      height: 968,
      span: 5,
    },
    {
      src: "/creative/storm-birds.png",
      alt: "A flock of birds against a dark, cloudy sky.",
      width: 809,
      height: 952,
      span: 7,
    },
  ],
  film: undefined,
  portfolioUrl: undefined,
};

export const MAX_CREATIVE_PHOTOS = 24;
