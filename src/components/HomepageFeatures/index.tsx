import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Enable features',
    Svg: require('@site/static/img/features.svg').default,
    description: (
      <>
        Depending on how detailed information you can provide us
        we can enable more features for your customers. Driving more traffic to your site!
      </>
    ),
  },
  {
    title: 'For Big and Small',
    Svg: require('@site/static/img/size.svg').default,
    description: (
      <>
        Feeds can be a simple and small containing a single offer
        up to full inventories containing millions of offers.
      </>
    ),
  },
  {
    title: 'Get Insights',
    Svg: require('@site/static/img/pj-insights.svg').default,
    description: (
      <>
        Producing a high quality feed will give you insights into your inventory.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
