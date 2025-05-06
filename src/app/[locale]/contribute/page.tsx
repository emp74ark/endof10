import Link from 'next/link';

export default function ContributePage() {
  return (
    <main>
      <h2>Contribute</h2>

      <section>
        <h3>
          When can I publish our repair café or independent computer shop at
          endof10.org?
        </h3>

        <p className="p4">
          If you offer Linux help, you can add your location right now!
        </p>

        <p className="p4">
          A description of the information we need for{' '}
          <Link href="/places">places</Link> and for{' '}
          <Link href="/events">events</Link> can be found at the Git
          repository&apos;s README. Send the information by email to
          endof10&nbsp;[at]&nbsp;lists.posteo.de. If you can, help us out by
          providing that information in JSON format.
        </p>

        <p className="p4">
          If you have the technical know-how, you can also make a{' '}
          <Link
            href="https://invent.kde.org/websites/endof10-org/-/tree/master/data"
            target="_blank"
          >
            Merge Request
          </Link>{' '}
          yourself at the End Of 10 website&apos;s repository.
        </p>
      </section>

      <section>
        <h3>How can I get involved with the campaign?</h3>

        <p>
          There are many ways to get involved! Contact us so we can coordinate
          your efforts with ours.
        </p>

        <ul>
          <li>
            Put repair cafes and independent computer shops offering Linux
            support in touch with us
          </li>
          <li>Organize an installation event and let us know about it</li>
          <li>
            Design materials for new users such as guides, promotional flyers,
            etc.
          </li>
          <li>
            Distribute materials in cafes, shops, universities, schools in your
            area
          </li>
          <li>
            Boost the campaign&apos;s online presence by sharing our social
            media posts
          </li>
          <li>Translate the website (more below), campaign materials, etc.</li>
          <li>
            Volunteer with FOSS communities participating in the campaign
            (improving documentation, software debugging, design)
          </li>
          <li>&lt;your ideas&gt;</li>
        </ul>
      </section>

      <section>
        <h3>Which communication platforms does the End Of 10 campaign use?</h3>

        <p className="p4">
          Write us at one of these public channels, introduce yourself, and let
          us know how you&apos;d like to get involved:
        </p>

        <ul>
          <li>
            Matrix:{' '}
            <Link href="https://matrix.to/#/#endof10:kde.org" target="_blank">
              https://matrix.to/#/#endof10:kde.org
            </Link>
          </li>
          <li>
            Mailing list:{' '}
            <Link
              href="https://lists.posteo.de/listinfo/endof10"
              target="_blank"
            >
              https://lists.posteo.de/listinfo/endof10
            </Link>
          </li>
        </ul>
      </section>

      <section>
        <h3>Is the campaign active on social media?</h3>

        <p className="p4">
          We are on the Fediverse! Follow our Mastodon account and boost our
          posts:{' '}
          <Link href="https://floss.social/@endof10" target="_blank">
            https://floss.social/@endof10
          </Link>
        </p>
      </section>

      <section>
        <h3>How can I help with the translation of the endof10.org website?</h3>

        <p className="p4">
          The website is hosted by KDE and follows the translation workflow used
          for all of KDE&apos;s websites.
        </p>

        <p className="p4">
          Find your language team:{' '}
          <Link href="https://l10n.kde.org/" target="_blank">
            https://l10n.kde.org/
          </Link>
          .
        </p>

        <p className="p4">
          Learn about the process:{' '}
          <Link
            href="https://community.kde.org/Get_Involved/translation"
            target="_blank"
          >
            https://community.kde.org/Get_Involved/translation
          </Link>
        </p>
      </section>

      <section>
        <h3>
          Do you already have a flyer/poster advertising the End Of 10 campaign?
        </h3>

        <p className="p4">
          You can find a leaflet in various languages here:{' '}
          <Link
            href="https://invent.kde.org/teams/eco/opt-green/-/tree/master/materials/leaflets"
            target="_blank"
          >
            https://invent.kde.org/teams/eco/opt-green/-/tree/master/materials/leaflets
          </Link>
        </p>

        <p className="p4">We are working on posters. Check here again soon.</p>
      </section>

      <section>
        <h3>
          Why isn&apos;t &lt;INSERT FAVORITE DISTRO&gt; promoted on the website?
        </h3>

        <p className="p4">
          The End Of 10 website and outreach are intentionally distro-agnostic.
          The goal is to speak as a big FOSS family. We want the campaign and
          activities to represent all of our communities.
        </p>
      </section>

      <section>
        <h3>
          Does distro-agnostic mean FOSS communities cannot promote their own
          work?
        </h3>

        <p className="p4">
          Individual FOSS communities are welcome to promote their own work in
          the context of the campaign, with two caveats: (i) it must be clear
          you are speaking for your community and not the campaign, and (ii) you
          must not speak negatively about the work of other communities.
        </p>

        <p className="p4">
          For example, one of the planned activities is a &ldquo;Lists of
          10&ldquo; social media campaign with the hashtag #EndOf10. In this
          context:
        </p>

        <ul>
          <li>
            The official End Of 10 social media account remains as neutral as
            possible (e.g., &ldquo;10 reasons to switch to Linux&ldquo;) and
            does not promote any specific distro.
          </li>
          <li>
            Your community does outreach on social media with a &ldquo;10
            reasons to switch to &lt;YOUR PROJECT&gt;&ldquo; with the #EndOf10
            hashtag. In the list of reasons you promote your own work. However,
            it would be unacceptable to speak negatively about any other FOSS
            community&apos;s work.
          </li>
        </ul>
      </section>
    </main>
  );
}
