import React from 'react';
import ReactMarkdown from 'react-markdown'
/*
Changelog format is based on <a href="https://keepachangelog.com/en/1.0.0/">Keep a Changelog</a>,
versions adheres to <a href="Semantic Versioning">https://semver.org/spec/v2.0.0.html</a>.

Example usage: 

<ChangeLog versionHistory={[
  {
    semanticVersion: "0.0.2",
    date: new Date("2022-12-06"),
    added: [
        "Complete list of required fields"
    ],
    changed: ["A changed item", "Another changed item"],
    deprecated: ["Deprecated"],
    removed: ["Removed"],
    fixed: ["Fixed"],
    security: ["A security issue"]
  },
  {
    semanticVersion: "0.0.1",
    date: new Date("2022-12-05"),
    added: [
        "Complete list of required fields"
    ],
    changed: [],
    deprecated: [],
    removed: ["something gone"],
    fixed: [],
    security: []
  }
]} />

*/


const renderVerblist = (heading, items) => <>

    {items && items.length > 0 &&
        <>
            <h4>{heading}</h4>
            <ul>
                {items.map((item, i) => (
                    <li><ReactMarkdown>{item}</ReactMarkdown></li>
                ))
                }
            </ul>
        </>
    }
</>;

export default function ChangeLog({ versionHistory, dateOnly }) {

    return <>
        {versionHistory && versionHistory.map((v, i) => (
            <div id="v{v.semanticVersion}" style={{ marginTop: '1em' }}>
                {dateOnly &&
                    <h3>{new Date(v.date).toISOString().slice(0, 10)}</h3>
                }

                {!dateOnly &&
                    <h3>[{v.semanticVersion}] - {new Date(v.date).toISOString().slice(0, 10)}</h3>
                }


                {renderVerblist("Added", v.added)}
                {renderVerblist("Changed ", v.changed)}
                {renderVerblist("Deprecated ", v.deprecated)}
                {renderVerblist("Removed ", v.removed)}
                {renderVerblist("Fixed", v.fixed)}
                {renderVerblist("Security", v.security)}
            </div>
        ))
        }
    </>
}