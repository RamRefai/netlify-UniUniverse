import Link from 'next/link';
import chatBox from 'pages/implementation/chatBox.js';
import courseFlowSelection from 'pages/implementation/courseFlowSelection.js'
import FAQ from 'pages/implementation/FAQ.js'
import importantLinks from 'pages/implementation/importantLinks.js'
import interviewHelp from 'pages/implementation/interviewHelp.js'
import parkingSelection from 'pages/implementation/parkingSelection.js'
import RMP from 'pages/implementation/RMP.js'

function NavigationMenu() {
  return (
    <nav id='navContainer'>
      <ul>
        <li>
            <Link href="../implementation/chatBox">
                <a>Chat box</a>
            </Link>
        </li>
        <li>
            <Link href="../implementation/courseFlowSelection">
                <a>Course Flow Diagrams</a>
            </Link>
        </li>
        <li>
            <Link href="../implementation/FAQ">
                <a>FAQ</a>
            </Link>
        </li>
        <li>
            <Link href="../implementation/importantLinks">
                <a>Important Links</a>
            </Link>
        </li>
        <li>
            <Link href="../implementation/interviewHelp">
                <a>Interview Help</a>
            </Link>
        </li>
        <li>
            <Link href="../implementation/parkingSelection">
                <a>Parking Finder</a>
            </Link>
        </li>
        <li>
            <Link href="../implementation/RMP">
                <a>Rate my Professor Add-on</a>
            </Link>
        </li>
        {/* Add links for other components as needed */}
      </ul>
    </nav>
  );
}

export default NavigationMenu;
