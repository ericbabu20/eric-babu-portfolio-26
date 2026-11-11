/**
 * PHOTOGRAPHY & FILM
 * ------------------
 * Only add work that is genuinely yours. Nothing here is a placeholder, and
 * The homepage section links to the /photography page. That page shows 10
 * labelled "Coming soon" frames until you replace them with real photographs;
 * the homepage previews the first 3 photographs once you add them.
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
  // Add your photographs here (up to 10). See the template above.
  photos: [],
  film: undefined,
  portfolioUrl: undefined,
};

export const MAX_CREATIVE_PHOTOS = 10;
