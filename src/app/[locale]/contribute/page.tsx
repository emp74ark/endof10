import Link from 'next/link';
import { useTranslations } from 'next-intl';

export default function ContributePage() {
  const t = useTranslations('contribute');
  return (
    <main>
      <h2>{t('contribute')}</h2>

      <section>
        <h3>{t('whenCanIPublish')}</h3>

        <p className="p4">{t('ifYouOfferLinuxHelp')}</p>

        <p className="p4">
          {t('aDescriptionOfTheInformationWeNeedFor')}{' '}
          <Link href="/places">{t('places')}</Link> {t('andFor')}{' '}
          <Link href="/events">{t('events')}</Link>{' '}
          {t('canBeFoundAtTheGitRepository')}
        </p>

        <p className="p4">
          {t('ifYouHaveTheTechnicalKnow')}{' '}
          <Link
            href="https://invent.kde.org/websites/endof10-org/-/tree/master/data"
            target="_blank"
          >
            {t('mergeRequest')}
          </Link>{' '}
          {t('yourselfAtTheEndOf10')}
        </p>
      </section>

      <section>
        <h3>{t('howCanIGetInvolved')}</h3>

        <p>{t('thereAreManyWays')}</p>

        <ul>
          <li>{t('putRepairCafes')}</li>
          <li>{t('organizeAnInstallationEvent')}</li>
          <li>{t('designMaterials')}</li>
          <li>{t('distributeMaterials')}</li>
          <li>{t('boostTheCampaign')}</li>
          <li>{t('translateTheWebsite')}</li>
          <li>{t('volunteerWithFoss')}</li>
          <li>&lt;{t('yourIdeas')}&gt;</li>
        </ul>
      </section>

      <section>
        <h3>{t('whichCommunicationPlatformsDoesTheEndOf10CampaignUse')}</h3>

        <p className="p4">{t('writeUsAtOneOfThesePublicChannels')}</p>

        <ul>
          <li>
            Matrix:{' '}
            <Link href="https://matrix.to/#/#endof10:kde.org" target="_blank">
              https://matrix.to/#/#endof10:kde.org
            </Link>
          </li>
          <li>
            {t('mailingList')}:{' '}
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
        <h3>{t('isTheCampaignActiveOnSocialMedia')}</h3>

        <p className="p4">
          {t('weAreOnTheFediverse!FollowOurMastodonAccountAndBoostOurPosts')}:{' '}
          <Link href="https://floss.social/@endof10" target="_blank">
            https://floss.social/@endof10
          </Link>
        </p>
      </section>

      <section>
        <h3>{t('howCanIHelpWithTheTranslationOfTheEndOf10')}</h3>

        <p className="p4">{t('theWebsiteIsHostedByKde')}</p>

        <p className="p4">
          {t('findYourLanguageTeam')}:{' '}
          <Link href="https://l10n.kde.org/" target="_blank">
            https://l10n.kde.org/
          </Link>
          .
        </p>

        <p className="p4">
          {t('learnAboutTheProcess')}:{' '}
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
          {t('doYouAlreadyHaveAFlyer')}
        </h3>

        <p className="p4">
          {t('youCanFindALeafletInVariousLanguagesHere')}:{' '}
          <Link
            href="https://invent.kde.org/teams/eco/opt-green/-/tree/master/materials/leaflets"
            target="_blank"
          >
            https://invent.kde.org/teams/eco/opt-green/-/tree/master/materials/leaflets
          </Link>
        </p>

        <p className="p4">{t('weAreWorkingOnPosters')}</p>
      </section>

      <section>
        <h3>{t('favoriteDistro')}</h3>

        <p className="p4">{t('distroAgnostic')}</p>
      </section>

      <section>
        <h3>{t('doesDistroAgnosticMean')}</h3>

        <p className="p4">{t('IndividualFossCommunities')}</p>

        <p className="p4">{t('forExample')}</p>

        <ul>
          <li>{t('theOfficialEndOf10SocialMedia')}</li>
          <li>{t('yourCommunity')}</li>
        </ul>
      </section>
    </main>
  );
}
